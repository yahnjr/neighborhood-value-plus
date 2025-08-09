import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import * as turf from '@turf/turf';
import { GeoJSONFeature } from '../services/supabaseService';

interface ClosestContractorPopupProps {
    addedPoint: GeoJSONFeature;
    contractors: GeoJSONFeature[];
    onClose: () => void;
}

interface ClosestContractor {
    contractor: GeoJSONFeature;
    distance: number;
}

const ClosestContractorPopup: React.FC<ClosestContractorPopupProps> = ({
    addedPoint,
    contractors,
    onClose
}) => {
    const [closestContractor, setClosestContractor] = useState<ClosestContractor | null>(null);

    useEffect(() => {
        if (!addedPoint || !contractors || contractors.length === 0) {
            return;
        }

        const addedPointServiceType = addedPoint.properties?.["Service_Ty"];
        if (!addedPointServiceType) {
            return;
        }

        // Filter contractors by service type compatibility
        const compatibleContractors = contractors.filter(contractor => {
            const contractorType = contractor.properties?.Type;
            // For now, we'll show all contractors - you can add more specific filtering here
            return contractorType;
        });

        if (compatibleContractors.length === 0) {
            return;
        }

        // Calculate distances using turf.js
        const addedPointCoordinates = addedPoint.geometry.coordinates;
        const pointGeometry = turf.point(addedPointCoordinates);

        let minDistance = Infinity;
        let nearest: GeoJSONFeature | null = null;

        compatibleContractors.forEach(contractor => {
            if (contractor.geometry?.coordinates) {
                const contractorPoint = turf.point(contractor.geometry.coordinates);
                const distance = turf.distance(pointGeometry, contractorPoint, { units: 'miles' });
                
                if (distance < minDistance) {
                    minDistance = distance;
                    nearest = contractor;
                }
            }
        });

        if (nearest) {
            setClosestContractor({
                contractor: nearest,
                distance: minDistance
            });
        }
    }, [addedPoint, contractors]);

    // Auto-close after 8 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 8000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!closestContractor) {
        return null;
    }

    const contractorName = closestContractor.contractor.properties?.Name || 'Unknown Contractor';
    const contractorAddress = closestContractor.contractor.properties?.Address || 'Address not available';
    const distanceFormatted = closestContractor.distance.toFixed(1);

    return (
        <div className="closest-contractor-popup">
            <div className="popup-header">
                <div className="popup-title">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#2196F3', marginRight: '8px' }} />
                    Nearest Contractor
                </div>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="popup-content">
                <div className="contractor-info">
                    <strong>{contractorName}</strong> contractor is just <strong>{distanceFormatted} miles</strong> away
                </div>
                <div className="contractor-address">
                    {contractorAddress}
                </div>
            </div>
        </div>
    );
};

export default ClosestContractorPopup;
