import React from 'react';
import { SERVICE_TYPES, ServiceType } from '../constants/serviceTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface ServiceTypeDropdownProps {
  selectedServiceType: string;
  onServiceTypeChange: (type: string) => void;
}

const ServiceTypeDropdown: React.FC<ServiceTypeDropdownProps> = ({ selectedServiceType, onServiceTypeChange }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const hexToRgba = (hex: string, opacity: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

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

export default ServiceTypeDropdown;
