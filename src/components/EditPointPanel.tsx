import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { GeoJSONFeature } from '../services/geojsonService';
import ServiceTypeDropdown from './ServiceTypeDropdown';
import { SERVICE_TYPES } from '../constants/serviceTypes';

interface EditPointPanelProps {
    onClose: () => void;
    onUpdatePoint: (point: GeoJSONFeature) => void;
    onDeletePoint: (pointId: string) => void;
    point: GeoJSONFeature;
}

const EditPointPanel: React.FC<EditPointPanelProps> = ({ onClose, onUpdatePoint, onDeletePoint, point }) => {
    const [serviceType, setServiceType] = useState('');
    const [crossStreet, setCrossStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [status, setStatus] = useState('Active');
    const [fullAddress, setFullAddress] = useState('');
    const [referralSource, setReferralSource] = useState('');
    const [estimate, setEstimate] = useState('');

    useEffect(() => {
        if (point && point.properties) {
            setServiceType(point.properties["Service Ty"] || '');
            setCrossStreet(point.properties["Cross Stre"] || '');
            setNeighborhood(point.properties["neighbhood"] || '');
            setStatus(point.properties["Status"] || 'Active');
            setFullAddress(point.properties["Full Addre"] || '');
            setReferralSource(point.properties["Refferal S"] || '');
            setEstimate(point.properties["Estimate"] || '');
        }
    }, [point]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedPoint: GeoJSONFeature = {
            ...point,
            properties: {
                ...point.properties,
                "Service Ty": serviceType,
                "Cross Stre": crossStreet,
                "neighbhood": neighborhood,
                "Status": status,
                "Full Addre": fullAddress,
                "Refferal S": referralSource,
                "Estimate": estimate
            }
        };
        onUpdatePoint(updatedPoint);
        onClose();
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this point?')) {
            // Assuming the point has a unique ID in its properties
            const pointId = point.properties?.id;
            if (pointId) {
                onDeletePoint(pointId);
                onClose();
            } else {
                alert("Could not find a unique ID for this point to delete.");
            }
        }
    };

    return (
        <div className="header-panel edit-point-panel">
            <div className="panel-header">
                <h3>Edit Service Point</h3>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="panel-content">
                <form className="edit-point-form" onSubmit={handleSubmit}>
                    <ServiceTypeDropdown
                        selectedServiceType={serviceType}
                        onServiceTypeChange={setServiceType}
                    />
                    <div className="form-group">
                        <label>Cross Street</label>
                        <input type="text" value={crossStreet} onChange={(e) => setCrossStreet(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Neighborhood</label>
                        <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Full Address</label>
                        <input type="text" value={fullAddress} onChange={(e) => setFullAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Referral Source</label>
                        <input type="text" value={referralSource} onChange={(e) => setReferralSource(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Estimate</label>
                        <input type="text" value={estimate} onChange={(e) => setEstimate(e.target.value)} />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="update-point-btn">Update Point</button>
                        <button type="button" className="delete-point-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPointPanel;
