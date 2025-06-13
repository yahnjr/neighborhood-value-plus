import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SERVICE_TYPES, ServiceType } from '../constants/serviceTypes';

interface AddPointPanelProps {
    onClose: () => void;
    onAddPoint: (point: any) => void;
    coordinates?: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
    onCoordinatesChange: (coords: { lat: number; lng: number; neighborhood?: string | null } | null) => void;
    setIsAddingPoint: (isAdding: boolean) => void;
}

interface ServiceTypeDropdownProps {
  selectedServiceType: string;
  onServiceTypeChange: (type: string) => void;
}

const ServiceTypeDropdown: React.FC<ServiceTypeDropdownProps> = ({ selectedServiceType, onServiceTypeChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Helper function to convert hex to rgba with opacity
  const hexToRgba = (hex: string, opacity: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Find the selected service type object
  const selectedService = SERVICE_TYPES.find(service => service.name === selectedServiceType);

  const handleSelect = (serviceType: ServiceType) => {
    onServiceTypeChange(serviceType.name);
    setIsOpen(false);
  };

  return (
    <div className="service-type-dropdown">
      <div className="dropdown-label-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 4 }}>
        <label className="field-label" style={{ marginBottom: 0 }}>Service Type *</label>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="dropdown-container">
        <div
          className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedService ? (
            <div className="selected-service">
              <div
                className="service-icon-container"
                style={{ backgroundColor: hexToRgba(selectedService.color, 0.1), display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '6px', minWidth: '160px' }}
              >
                <FontAwesomeIcon
                  icon={selectedService.icon}
                  style={{ color: selectedService.color }}
                  className="service-icon"
                />
                <span className="service-name" style={{ color: selectedService.color, fontWeight: 600 }}>{selectedService.name}</span>
              </div>
            </div>
          ) : (
            <span className="placeholder">Select a service type</span>
          )}
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {SERVICE_TYPES.map((serviceType) => (
              <div
                key={serviceType.id}
                className={`dropdown-option ${selectedService?.id === serviceType.id ? 'selected' : ''}`}
                onClick={() => handleSelect(serviceType)}
                style={{
                  backgroundColor: selectedService?.id === serviceType.id
                    ? hexToRgba(serviceType.color, 0.1)
                    : 'transparent',
                  borderRadius: '6px',
                  marginBottom: '4px',
                  cursor: 'pointer',
                  padding: '2px 0',
                }}
              >
                <div
                  className="service-icon-container"
                  style={{ backgroundColor: hexToRgba(serviceType.color, 0.1), display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '6px', minWidth: '160px' }}
                >
                  <FontAwesomeIcon
                    icon={serviceType.icon}
                    style={{ color: serviceType.color }}
                    className="service-icon"
                  />
                  <span className="service-name" style={{ color: serviceType.color, fontWeight: 600 }}>{serviceType.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AddPointPanel: React.FC<AddPointPanelProps> = ({ onClose, onAddPoint, coordinates, onCoordinatesChange, setIsAddingPoint }) => {
    const [serviceType, setServiceType] = useState('');
    const [crossStreet, setCrossStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState(coordinates?.neighborhood || '');
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
            setNeighborhood(coordinates.neighborhood || '');
            setCrossStreet(coordinates.crossStreet || '');
        }
    }, [coordinates]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target instanceof Element) || !event.target.closest('.dropdown-container')) {
                // Dropdown will close automatically due to its internal state management
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <label>Cross Street</label>
                        <input type="text" value={crossStreet} onChange={(e) => setCrossStreet(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Neighborhood</label>
                        <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} required />
                    </div>
                    
                    <ServiceTypeDropdown
                        selectedServiceType={serviceType}
                        onServiceTypeChange={setServiceType}
                    />
                    
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