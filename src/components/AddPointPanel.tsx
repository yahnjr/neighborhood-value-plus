import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { SERVICE_TYPES } from '../constants/serviceTypes';
import { addFeatureToLayer, GeoJSONFeature } from '../services/supabaseService';
import * as turf from '@turf/turf';
import type { Feature, Polygon, MultiPolygon } from 'geojson';

interface AddPointPanelProps {
    onClose: () => void;
    onAddPoint: (point: GeoJSONFeature) => void;
    onPointAdded?: (point: GeoJSONFeature) => void; // Callback when point is successfully added
    coordinates?: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
    onCoordinatesChange: (coords: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null } | null) => void;
    setIsAddingPoint: (isAdding: boolean) => void;
    layerName?: string;
    geoJsonData?: {
        NeighborhoodBoundaries?: {
            type: 'FeatureCollection';
            features: any[];
        };
        PortlandStreets?: {
            type: 'FeatureCollection';
            features: any[];
        };
        contractors?: {
            type: 'FeatureCollection';
            features: any[];
        };
    };
}

// Step-specific interfaces
interface StepProps {
    onNext: () => void;
    onBack?: () => void;
    isSubmitting?: boolean;
}

interface LocationStepProps extends StepProps {
    coordinates?: { lat: number; lng: number };
    onSelectLocation: () => void;
}

interface LocationConfirmStepProps extends StepProps {
    coordinates: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
    onConfirm: (neighborhood: string, crossStreet: string) => void;
}

interface ServiceTypeStepProps extends StepProps {
    onSelectService: (type: string) => void;
}

interface DetailsStepProps extends Omit<StepProps, 'onNext'> {
    onNext?: () => void; // Optional for the last step
    onSubmit: (details: {
        status: string;
        fullAddress: string;
        referralSource: string;
        estimate: string;
    }) => void;
}
// Step Components
const LocationStep: React.FC<LocationStepProps> = ({ onNext, coordinates, onSelectLocation }) => {
    return (
        <div className="step">
            <div className="step-header" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px' 
            }}>
                <h3 style={{ margin: 0 }}>Step 1: Choose Location</h3>
                <div className="step-indicator" style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    fontWeight: '500' 
                }}>1 of 4</div>
            </div>
            <div className="step-content" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
            }}>
                <div style={{ 
                    textAlign: 'center', 
                    padding: '24px 0' 
                }}>
                    <FontAwesomeIcon 
                        icon={faMapMarkerAlt} 
                        style={{ 
                            fontSize: '48px', 
                            color: '#2196F3', 
                            marginBottom: '16px' 
                        }} 
                    />
                    <p style={{ 
                        margin: '0 0 16px 0', 
                        fontSize: '16px', 
                        color: '#333' 
                    }}>
                        Click on the map to select a location for the new service point.
                    </p>
                </div>
                
                {!coordinates && (
                    <button 
                        className="add-point-btn"
                        onClick={onSelectLocation}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        Select Location on Map
                    </button>
                )}
                
                {coordinates && (
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '16px' 
                    }}>
                        <div style={{ 
                            background: '#f5f5f5', 
                            padding: '16px', 
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <p style={{ 
                                margin: '0 0 8px 0', 
                                fontWeight: '600', 
                                color: '#333' 
                            }}>
                                Selected Coordinates:
                            </p>
                            <p style={{ margin: '4px 0', fontSize: '14px' }}>
                                Latitude: {coordinates.lat.toFixed(6)}
                            </p>
                            <p style={{ margin: '4px 0', fontSize: '14px' }}>
                                Longitude: {coordinates.lng.toFixed(6)}
                            </p>
                        </div>
                        <button 
                            className="add-point-btn"
                            onClick={onNext}
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const LocationConfirmStep: React.FC<LocationConfirmStepProps> = ({ 
    onNext, 
    onBack, 
    coordinates,
    onConfirm 
}) => {
    const [neighborhood, setNeighborhood] = useState(coordinates.neighborhood || '');
    const [crossStreet, setCrossStreet] = useState(coordinates.crossStreet || '');

    const handleConfirm = () => {
        onConfirm(neighborhood, crossStreet);
        onNext();
    };

    return (
        <div className="step">
            <div className="step-header" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px' 
            }}>
                <h3 style={{ margin: 0 }}>Step 2: Confirm Location Details</h3>
                <div className="step-indicator" style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    fontWeight: '500' 
                }}>2 of 4</div>
            </div>
            <div className="step-content" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
            }}>
                <p style={{ margin: '0 0 8px 0', color: '#666' }}>
                    Please confirm or update the location details below:
                </p>
                
                <div className="form-group" style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '6px' 
                }}>
                    <label style={{ 
                        fontWeight: '500', 
                        fontSize: '14px', 
                        color: '#333' 
                    }}>
                        Neighborhood *
                    </label>
                    <input
                        type="text"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        required
                        placeholder="Enter neighborhood name"
                        style={{
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '14px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                
                <div className="form-group" style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '6px' 
                }}>
                    <label style={{ 
                        fontWeight: '500', 
                        fontSize: '14px', 
                        color: '#333' 
                    }}>
                        Cross Street *
                    </label>
                    <input
                        type="text"
                        value={crossStreet}
                        onChange={(e) => setCrossStreet(e.target.value)}
                        required
                        placeholder="Enter cross street"
                        style={{
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '14px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                
                <div className="button-group" style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    marginTop: '8px' 
                }}>
                    <button 
                        className="back-btn" 
                        onClick={onBack}
                        style={{
                            flex: '0 0 auto',
                            padding: '12px 16px',
                            background: '#f5f5f5',
                            color: '#666',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </button>
                    <button 
                        className="add-point-btn"
                        onClick={handleConfirm}
                        disabled={!neighborhood.trim() || !crossStreet.trim()}
                        style={{ flex: '1' }}
                    >
                        Confirm Location
                    </button>
                </div>
            </div>
        </div>
    );
};

const ServiceTypeStep: React.FC<ServiceTypeStepProps> = ({ onNext, onBack, onSelectService }) => {
    return (
        <div className="step">
            <div className="step-header" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px' 
            }}>
                <h3 style={{ margin: 0 }}>Step 3: Select Service Type</h3>
                <div className="step-indicator" style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    fontWeight: '500' 
                }}>3 of 4</div>
            </div>
            <div className="step-content" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
            }}>
                <p style={{ margin: '0 0 8px 0', color: '#666' }}>
                    Choose the type of service for this location:
                </p>
                <div className="service-type-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '12px'
                }}>
                    {SERVICE_TYPES.map((serviceType) => (
                        <div
                            key={serviceType.id}
                            className="service-type-item"
                            onClick={() => {
                                onSelectService(serviceType.name);
                                onNext();
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '16px 12px',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                background: 'white'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = serviceType.color;
                                e.currentTarget.style.background = `${serviceType.color}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e0e0e0';
                                e.currentTarget.style.background = 'white';
                            }}
                        >
                            <FontAwesomeIcon
                                icon={serviceType.icon}
                                style={{ 
                                    color: serviceType.color,
                                    fontSize: '24px',
                                    marginBottom: '8px'
                                }}
                                className="service-icon"
                            />
                            <span 
                                className="service-name"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    color: '#333'
                                }}
                            >
                                {serviceType.name}
                            </span>
                        </div>
                    ))}
                </div>
                <button 
                    className="back-btn" 
                    onClick={onBack}
                    style={{
                        alignSelf: 'flex-start',
                        padding: '12px 16px',
                        background: '#f5f5f5',
                        color: '#666',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
            </div>
        </div>
    );
};

const DetailsStep: React.FC<DetailsStepProps> = ({ onBack, onSubmit, isSubmitting }) => {
    const [status, setStatus] = useState('Active');
    const [fullAddress, setFullAddress] = useState('');
    const [referralSource, setReferralSource] = useState('');
    const [estimate, setEstimate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            status,
            fullAddress,
            referralSource,
            estimate
        });
    };

    return (
        <div className="step">
            <div className="step-header" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px' 
            }}>
                <h3 style={{ margin: 0 }}>Step 4: Additional Details</h3>
                <div className="step-indicator" style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    fontWeight: '500' 
                }}>4 of 4</div>
            </div>
            <div className="step-content">
                <form onSubmit={handleSubmit} className="add-point-form">
                    <div className="form-group" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '6px' 
                    }}>
                        <label style={{ 
                            fontWeight: '500', 
                            fontSize: '14px', 
                            color: '#333' 
                        }}>
                            Status *
                        </label>
                        <select 
                            value={status} 
                            onChange={(e) => setStatus(e.target.value)}
                            disabled={isSubmitting}
                            style={{
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                width: '100%',
                                boxSizing: 'border-box',
                                background: 'white'
                            }}
                        >
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    
                    <div className="form-group" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '6px' 
                    }}>
                        <label style={{ 
                            fontWeight: '500', 
                            fontSize: '14px', 
                            color: '#333' 
                        }}>
                            Full Address
                        </label>
                        <input 
                            type="text" 
                            value={fullAddress} 
                            onChange={(e) => setFullAddress(e.target.value)} 
                            disabled={isSubmitting}
                            placeholder="Enter full address (optional)"
                            style={{
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    
                    <div className="form-group" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '6px' 
                    }}>
                        <label style={{ 
                            fontWeight: '500', 
                            fontSize: '14px', 
                            color: '#333' 
                        }}>
                            Referral Source
                        </label>
                        <input 
                            type="text" 
                            value={referralSource} 
                            onChange={(e) => setReferralSource(e.target.value)} 
                            disabled={isSubmitting}
                            placeholder="Enter referral source (optional)"
                            style={{
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    
                    <div className="form-group" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '6px' 
                    }}>
                        <label style={{ 
                            fontWeight: '500', 
                            fontSize: '14px', 
                            color: '#333' 
                        }}>
                            Estimate
                        </label>
                        <input 
                            type="text" 
                            value={estimate} 
                            onChange={(e) => setEstimate(e.target.value)} 
                            disabled={isSubmitting}
                            placeholder="Enter estimate (optional)"
                            style={{
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    
                    <div className="button-group" style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        marginTop: '8px' 
                    }}>
                        <button 
                            type="button" 
                            className="back-btn" 
                            onClick={onBack}
                            disabled={isSubmitting}
                            style={{
                                flex: '0 0 auto',
                                padding: '12px 16px',
                                background: '#f5f5f5',
                                color: '#666',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                        </button>
                        <button 
                            type="submit" 
                            className="add-point-btn"
                            disabled={isSubmitting}
                            style={{ flex: '1' }}
                        >
                            {isSubmitting ? 'Adding Point...' : 'Add Point'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const AddPointPanel: React.FC<AddPointPanelProps> = ({ 
    onClose, 
    onAddPoint, 
    onPointAdded,
    coordinates, 
    onCoordinatesChange, 
    setIsAddingPoint,
    layerName = 'addpoints',
    geoJsonData
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [serviceType, setServiceType] = useState('');
    const [locationDetails, setLocationDetails] = useState({
        neighborhood: '',
        crossStreet: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Auto-detect neighborhood and cross street when coordinates change
    useEffect(() => {
        if (coordinates && geoJsonData) {
            const detectedNeighborhood = getNeighborhoodFromCoordinates(
                coordinates.lng, 
                coordinates.lat, 
                geoJsonData.NeighborhoodBoundaries
            );
            const detectedCrossStreet = getTwoNearestStreets(
                coordinates.lng,
                coordinates.lat,
                geoJsonData.PortlandStreets
            );

            // Update coordinates with detected values if not already set
            if (detectedNeighborhood || detectedCrossStreet) {
                onCoordinatesChange({
                    ...coordinates,
                    neighborhood: coordinates.neighborhood || detectedNeighborhood,
                    crossStreet: coordinates.crossStreet || detectedCrossStreet
                });
            }
        }
    }, [coordinates?.lat, coordinates?.lng, geoJsonData]);

    // Utility function to detect neighborhood from coordinates
    const getNeighborhoodFromCoordinates = (
        lng: number, 
        lat: number, 
        neighborhoodBoundaries?: { features: any[] }
    ): string | null => {
        if (!neighborhoodBoundaries) return null;
        
        const point = turf.point([lng, lat]);
        
        for (const feature of neighborhoodBoundaries.features) {
            if (
                feature.geometry.type === 'Polygon' ||
                feature.geometry.type === 'MultiPolygon'
            ) {
                try {
                    if (turf.booleanPointInPolygon(point, feature as Feature<Polygon | MultiPolygon>)) {
                        return feature.properties?.MAPLABEL || feature.properties?.NAME || null;
                    }
                } catch (error) {
                    console.warn('Error checking point in polygon:', error);
                }
            }
        }
        
        return null;
    };

    // Utility function to find nearest street
    const getTwoNearestStreets = (
            lng: number,
            lat: number,
            streets?: { features: any[] }
        ): string | null => {
            if (!streets || !streets.features.length) return null;
        
            const point = turf.point([lng, lat]);
            const streetDistances: Array<{ name: string; distance: number }> = [];
        
            for (const feature of streets.features) {
                if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
                    try {
                        const distance = turf.pointToLineDistance(point, feature, { units: 'meters' });
                        const streetName = feature.properties?.STREETNAME;
                        
                        if (streetName && distance < 200) { // Within 200 meters
                            streetDistances.push({ name: streetName, distance });
                        }
                    } catch (error) {
                        console.warn('Error calculating distance to street:', error);
                    }
                }
            }
        
            // Sort by distance and get the two closest unique street names
            streetDistances.sort((a, b) => a.distance - b.distance);
            
            // Remove duplicates (same street name)
            const uniqueStreets = streetDistances.filter((street, index, arr) => 
                arr.findIndex(s => s.name === street.name) === index
            );
            
            if (uniqueStreets.length === 0) return null;
            if (uniqueStreets.length === 1) return uniqueStreets[0].name;
            
            // Return the two nearest streets formatted as "Street 1 & Street 2"
            return `${uniqueStreets[0].name} & ${uniqueStreets[1].name}`;
        };

    // Reset to step 0 when coordinates are cleared
    useEffect(() => {
        if (!coordinates) {
            setCurrentStep(0);
        }
    }, [coordinates]);

    const handleSelectLocation = () => {
        setIsAddingPoint(true);
    };

    const handleLocationConfirm = (neighborhood: string, crossStreet: string) => {
        setLocationDetails({ neighborhood, crossStreet });
    };

    const handleServiceSelect = (type: string) => {
        setServiceType(type);
    };

    const handleDetailsSubmit = async (details: {
        status: string;
        fullAddress: string;
        referralSource: string;
        estimate: string;
    }) => {
        if (!coordinates) return;
        
        setIsSubmitting(true);
        setError(null);

        try {
            const FID = Date.now();
            const newFeature: GeoJSONFeature = {
                type: 'Feature',
                id: FID,
                geometry: {
                    type: 'Point',
                    coordinates: [coordinates.lng, coordinates.lat]
                },
                properties: {
                    Service_Ty: serviceType,
                    Cross_Stre: locationDetails.crossStreet,
                    neighbhood: locationDetails.neighborhood,
                    Status: details.status,
                    Full_Addre: details.fullAddress,
                    "Refferal S": details.referralSource,
                    Estimate: details.estimate
                }
            };

            console.log(`Adding point to layer: ${layerName}`);
            await addFeatureToLayer(layerName, newFeature);
            
            onAddPoint(newFeature);
            
            // Call the onPointAdded callback if provided
            if (onPointAdded) {
                onPointAdded(newFeature);
            }
            
            console.log('Point added successfully!');
            onClose();
        } catch (error) {
            console.error('Error adding point:', error);
            setError(error instanceof Error ? error.message : 'Failed to add point');
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Auto-advance to next step when coordinates are selected
    useEffect(() => {
        if (coordinates && currentStep === 0) {
            setCurrentStep(1);
        }
    }, [coordinates, currentStep]);

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <LocationStep
                        onNext={nextStep}
                        coordinates={coordinates}
                        onSelectLocation={handleSelectLocation}
                    />
                );
            case 1:
                return coordinates ? (
                    <LocationConfirmStep
                        onNext={nextStep}
                        onBack={prevStep}
                        coordinates={coordinates}
                        onConfirm={handleLocationConfirm}
                    />
                ) : null;
            case 2:
                return (
                    <ServiceTypeStep
                        onNext={nextStep}
                        onBack={prevStep}
                        onSelectService={handleServiceSelect}
                    />
                );
            case 3:
                return (
                    <DetailsStep
                        onBack={prevStep}
                        onSubmit={handleDetailsSubmit}
                        isSubmitting={isSubmitting}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={`header-panel add-point-panel ${currentStep === 0 ? 'location-step' : 'details-step'}`}>
            <div className="panel-header">
                <h3>Add New Service Point</h3>
                <button className="close-btn" onClick={onClose} disabled={isSubmitting}>
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
                
                {/* Progress indicator */}
                <div className="progress-indicator" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '24px',
                    padding: '0 4px'
                }}>
                    {[0, 1, 2, 3].map((step) => (
                        <React.Fragment key={step}>
                            <div
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: step <= currentStep ? '#2196F3' : '#e0e0e0',
                                    color: step <= currentStep ? 'white' : '#666',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    fontWeight: '500'
                                }}
                            >
                                {step + 1}
                            </div>
                            {step < 3 && (
                                <div
                                    style={{
                                        flex: 1,
                                        height: '2px',
                                        background: step < currentStep ? '#2196F3' : '#e0e0e0',
                                        margin: '0 8px'
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {renderStep()}
            </div>
        </div>
    );
};

export default AddPointPanel;