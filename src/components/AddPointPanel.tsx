import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface AddPointPanelProps {
    onClose: () => void;
    onAddPoint: (point: any) => void;
    coordinates?: { lat: number; lng: number };
    onCoordinatesChange: (coords: { lat: number; lng: number } | null) => void;
    setIsAddingPoint: (isAdding: boolean) => void;
}

const AddPointPanel: React.FC<AddPointPanelProps> = ({ onClose, onAddPoint, coordinates, onCoordinatesChange, setIsAddingPoint }) => {
    const [serviceType, setServiceType] = useState('');
    const [crossStreet, setCrossStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [status, setStatus] = useState('Active');
    const [fullAddress, setFullAddress] = useState('');
    const [referralSource, setReferralSource] = useState('');
    const [estimate, setEstimate] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        if (coordinates) {
            setLatitude(coordinates.lat.toString());
            setLongitude(coordinates.lng.toString());
        }
    }, [coordinates]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPoint = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
            },
            properties: {
                "Service Ty": serviceType,
                "Cross Stre": crossStreet,
                "neighbhood": neighborhood,
                "Status": status,
                "Full Addre": fullAddress,
                "Refferal S": referralSource,
                "Estimate": estimate
            }
        };
        onAddPoint(newPoint);
        onClose();
    };

    const handleResetCoordinates = () => {
        setLatitude('');
        setLongitude('');
        if (onCoordinatesChange) {
            onCoordinatesChange(null);
        }
        if (setIsAddingPoint) {
            setIsAddingPoint(true);
        }
    };

    return (
        <div className="header-panel add-point-panel">
            <div className="panel-header">
                <h3>Add New Service Point</h3>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="panel-content">
                <form className="add-point-form" onSubmit={handleSubmit}>
                    <div className="form-group coordinates-group">
                        <div className="coords-display">
                            <div>
                                <label>Latitude</label>
                                <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} required readOnly />
                            </div>
                            <div>
                                <label>Longitude</label>
                                <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} required readOnly />
                            </div>
                        </div>
                        <button type="button" onClick={handleResetCoordinates} className="reset-coords-btn">
                            Reset Location
                        </button>
                    </div>
                    <div className="form-group">
                        <label>Service Type</label>
                        <input type="text" value={serviceType} onChange={(e) => setServiceType(e.target.value)} required />
                    </div>
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
                    <button type="submit" className="add-point-btn">Add Point</button>
                </form>
            </div>
        </div>
    );
};

export default AddPointPanel;
