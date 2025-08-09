import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { GeoJSONFeature, updateFeatureInLayer, deleteFeatureFromLayer } from '../services/supabaseService';
import ServiceTypeDropdown from './ServiceTypeDropdown';

interface EditPointPanelProps {
    onClose: () => void;
    onUpdatePoint: (point: GeoJSONFeature) => void;
    onDeletePoint: (pointId: string) => void;
    point: GeoJSONFeature;
    layerName?: string; // Which layer the point belongs to
}

const EditPointPanel: React.FC<EditPointPanelProps> = ({ 
    onClose, 
    onUpdatePoint, 
    onDeletePoint, 
    point,
    layerName = 'addpoints' // Default layer name
}) => {
    const [serviceType, setServiceType] = useState('');
    const [crossStreet, setCrossStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [status, setStatus] = useState('Active');
    const [fullAddress, setFullAddress] = useState('');
    const [referralSource, setReferralSource] = useState('');
    const [estimate, setEstimate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (point && point.properties) {
            setServiceType(point.properties["Service_Ty"] || '');
            setCrossStreet(point.properties["Cross Stre"] || '');
            setNeighborhood(point.properties["neighbhood"] || '');
            setStatus(point.properties["Status"] || 'Active');
            setFullAddress(point.properties["Full Addre"] || '');
            setReferralSource(point.properties["Refferal S"] || '');
            setEstimate(point.properties["Estimate"] || '');
        }
    }, [point]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const updatedPoint: GeoJSONFeature = {
                ...point,
                properties: {
                    ...point.properties,
                    "Service_Ty": serviceType,
                    "Cross Stre": crossStreet,
                    "neighbhood": neighborhood,
                    "Status": status,
                    "Full Addre": fullAddress,
                    "Refferal S": referralSource,
                    "Estimate": estimate,
                    "updated_at": new Date().toISOString()
                }
            };

            // Update in Firebase Storage
            console.log(`Updating point in layer: ${layerName}`);
            await updateFeatureInLayer(layerName, updatedPoint);
            
            // Update the local UI
            onUpdatePoint(updatedPoint);
            
            console.log('Point updated successfully!');
            onClose();
        } catch (error) {
            console.error('Error updating point:', error);
            setError(error instanceof Error ? error.message : 'Failed to update point');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this point? This action cannot be undone.')) {
            return;
        }

        setIsDeleting(true);
        setError(null);

        try {
            const pointId = point.properties?.id;
            if (!pointId) {
                throw new Error('Point must have an ID to be deleted');
            }

            // Delete from Firebase Storage
            console.log(`Deleting point from layer: ${layerName}`);
            await deleteFeatureFromLayer(layerName, pointId);
            
            // Update the local UI
            onDeletePoint(pointId);
            
            console.log('Point deleted successfully!');
            onClose();
        } catch (error) {
            console.error('Error deleting point:', error);
            setError(error instanceof Error ? error.message : 'Failed to delete point');
        } finally {
            setIsDeleting(false);
        }
    };

    // Show point information in the header
    const getPointDisplayInfo = () => {
        const coords = point.geometry.coordinates;
        const lat = coords[1]?.toFixed(6) || 'N/A';
        const lng = coords[0]?.toFixed(6) || 'N/A';
        return `${lat}, ${lng}`;
    };

    return (
        <div className="header-panel edit-point-panel">
            <div className="panel-header">
                <div>
                    <h3>Edit Service Point</h3>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                        Location: {getPointDisplayInfo()}
                    </small>
                </div>
                <button className="close-btn" onClick={onClose} disabled={isSubmitting || isDeleting}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="panel-content">
                {error && (
                    <div className="error-message" style={{ 
                        color: '#d32f2f', 
                        backgroundColor: '#ffebee', 
                        padding: '8px 12px', 
                        borderRadius: '4px', 
                        marginBottom: '16px',
                        fontSize: '14px'
                    }}>
                        {error}
                    </div>
                )}
                <form className="edit-point-form" onSubmit={handleSubmit}>
                    <ServiceTypeDropdown
                        selectedServiceType={serviceType}
                        onServiceTypeChange={setServiceType}
                    />
                    <div className="form-group">
                        <label>Cross Street</label>
                        <input 
                            type="text" 
                            value={crossStreet} 
                            onChange={(e) => setCrossStreet(e.target.value)} 
                            required 
                            disabled={isSubmitting || isDeleting}
                        />
                    </div>
                    <div className="form-group">
                        <label>Neighborhood</label>
                        <input 
                            type="text" 
                            value={neighborhood} 
                            onChange={(e) => setNeighborhood(e.target.value)} 
                            required 
                            disabled={isSubmitting || isDeleting}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select 
                            value={status} 
                            onChange={(e) => setStatus(e.target.value)}
                            disabled={isSubmitting || isDeleting}
                        >
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Full Address</label>
                        <input 
                            type="text" 
                            value={fullAddress} 
                            onChange={(e) => setFullAddress(e.target.value)} 
                            disabled={isSubmitting || isDeleting}
                        />
                    </div>
                    <div className="form-group">
                        <label>Referral Source</label>
                        <input 
                            type="text" 
                            value={referralSource} 
                            onChange={(e) => setReferralSource(e.target.value)} 
                            disabled={isSubmitting || isDeleting}
                        />
                    </div>
                    <div className="form-group">
                        <label>Estimate</label>
                        <input 
                            type="text" 
                            value={estimate} 
                            onChange={(e) => setEstimate(e.target.value)} 
                            disabled={isSubmitting || isDeleting}
                        />
                    </div>
                    
                    {/* Show metadata if available */}
                    {(point.properties?.created_at || point.properties?.updated_at) && (
                        <div className="metadata-section" style={{ 
                            marginTop: '16px', 
                            padding: '12px', 
                            backgroundColor: '#f5f5f5', 
                            borderRadius: '4px',
                            fontSize: '12px',
                            color: '#666'
                        }}>
                            {point.properties?.created_at && (
                                <div>Created: {new Date(point.properties.created_at).toLocaleString()}</div>
                            )}
                            {point.properties?.updated_at && (
                                <div>Last Updated: {new Date(point.properties.updated_at).toLocaleString()}</div>
                            )}
                            {point.properties?.id && (
                                <div>ID: {point.properties.id}</div>
                            )}
                        </div>
                    )}
                    
                    <div className="form-actions" style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        marginTop: '20px',
                        flexDirection: 'column'
                    }}>
                        <button 
                            type="submit" 
                            className="update-point-btn"
                            disabled={isSubmitting || isDeleting || !serviceType}
                            style={{
                                backgroundColor: isSubmitting ? '#ccc' : '#4caf50',
                                color: 'white',
                                border: 'none',
                                padding: '12px 16px',
                                borderRadius: '4px',
                                cursor: isSubmitting || isDeleting ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            {isSubmitting ? 'Updating Point...' : 'Update Point'}
                        </button>
                        <button 
                            type="button" 
                            className="delete-point-btn" 
                            onClick={handleDelete}
                            disabled={isSubmitting || isDeleting}
                            style={{
                                backgroundColor: isDeleting ? '#ccc' : '#f44336',
                                color: 'white',
                                border: 'none',
                                padding: '12px 16px',
                                borderRadius: '4px',
                                cursor: isSubmitting || isDeleting ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            {isDeleting ? 'Deleting...' : 'Delete Point'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPointPanel;