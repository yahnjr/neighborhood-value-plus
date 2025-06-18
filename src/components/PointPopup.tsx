import React, { useState } from 'react';
import { useAuth } from '../services/auth-context';
import contractorTypesJson from '../constants/contractorTypes.json';
import { updateFeatureInLayer, GeoJSONFeature } from '../services/geojsonService';

const contractorTypes: Record<string, string[]> = contractorTypesJson;

interface PointPopupProps {
  jobType?: string;
  location?: string;
  status?: string;
  fullAddress?: string;
  referralSource?: string;
  estimate?: string;
  onClose: () => void;
  onEdit: () => void;
  featureId?: string;
  feature?: GeoJSONFeature;
  onStatusUpdate?: (newStatus: string) => void;
}

const PointPopup: React.FC<PointPopupProps> = ({
  jobType,
  location,
  status,
  fullAddress,
  referralSource,
  estimate,
  onClose,
  onEdit,
  // featureId,
  feature,
  onStatusUpdate
}) => {
  const { userData } = useAuth();
  const isAdmin = userData?.role === 'Admin';
  const isContractor = userData?.role === 'Contractor';
  const allowedForContractor = isContractor && userData.contractorType && jobType && contractorTypes[userData.contractorType]?.includes(jobType);
  const [statusValue, setStatusValue] = useState(status || '');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  React.useEffect(() => {
    console.log('[PointPopup] feature on mount:', feature);
    if (feature) {
      console.log('[PointPopup] feature.id on mount:', feature.id);
    }
  }, [feature]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusValue(e.target.value);
    setSaveError(null);
  };

  const handleSaveStatus = async () => {
    if (!feature) return;
    setSaving(true);
    setSaveError(null);
    // Ensure root id exists for update
    let updatedFeature = { ...feature, properties: { ...feature.properties, Status: statusValue } };
    // Use FID from the original feature, not the updated properties
    if (!updatedFeature.id && feature.properties && (feature.properties as any).FID) {
      updatedFeature.id = (feature.properties as any).FID;
    }
    console.log('[PointPopup] handleSaveStatus: feature:', updatedFeature);
    console.log('[PointPopup] handleSaveStatus: feature.id:', updatedFeature.id);
    try {
      await updateFeatureInLayer('addpoints', updatedFeature);
      if (onStatusUpdate) onStatusUpdate(statusValue);
      setSaving(false);
      onClose();
    } catch (err: any) {
      setSaveError('Failed to update status.');
      setSaving(false);
    }
  };

  return (
    <div className="point-popup">
      {/* Header */}
      <div className="point-popup-header">
        <h3 className="point-popup-title">Service Point Details</h3>
        <button
          className="point-popup-close"
          onClick={onClose}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="point-popup-content">
        <div className="point-popup-row">
          {/* Job Type */}
          <div>
            <div className="point-popup-label">Job Type</div>
            <div className="point-popup-value">{jobType || 'Not specified'}</div>
          </div>

          {/* Location */}
          <div>
            <div className="point-popup-label">Location</div>
            <div className="point-popup-value">{location || 'Not specified'}</div>
          </div>

          {/* Status */}
          <div>
            <div className="point-popup-label">Status</div>
            {allowedForContractor ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <select value={statusValue} onChange={handleStatusChange} className="point-popup-status-select">
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                </select>
                <button
                  className="edit-button"
                  style={{ minWidth: 80 }}
                  onClick={handleSaveStatus}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            ) : (
              <div
                className="point-popup-status"
                style={{
                  backgroundColor: getStatusColor(status).bg,
                  color: getStatusColor(status).text
                }}
              >
                {status || 'Unknown'}
              </div>
            )}
          </div>
        </div>
        {isAdmin && (
          <div className="point-popup-row" style={{ marginTop: '12px' }}>
            {/* Full Address */}
            <div>
              <div className="point-popup-label">Full Address</div>
              <div className="point-popup-value">{fullAddress || 'N/A'}</div>
            </div>
            {/* Referral Source */}
            <div>
              <div className="point-popup-label">Referral Source</div>
              <div className="point-popup-value">{referralSource || 'N/A'}</div>
            </div>
            <div>
              <div className="point-popup-label">Estimate</div>
              <div className="point-popup-value">$ {estimate || 'N/A'}</div>
            </div>
          </div>
        )}
      </div>
      {/* Footer with Edit button */}
      {(isAdmin || allowedForContractor) && (
        <div className="point-popup-footer">
          {isAdmin && (
            <button className="edit-button" onClick={onEdit}>
              Edit
            </button>
          )}
          {allowedForContractor && saveError && (
            <div style={{ color: 'red', marginTop: 8 }}>{saveError}</div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function to get status colors
const getStatusColor = (status?: string) => {
  if (!status) return { bg: '#f3f4f6', text: '#6b7280' };
  
  const statusLower = status.toLowerCase();
  
  if (statusLower.includes('active')) {
    return { bg: '#daff99', text: '#166534' };
  } else if (statusLower.includes('pending')) {
    return { bg: '#faff99', text: '#92400e' };
  } else if (statusLower.includes('complete')) {
    return { bg: '#c7f7ad', text: '#003b09' };
  } else {
    return { bg: '#f3f4f6', text: '#6b7280' };
  }
};

export default PointPopup;