import React, { useState } from 'react';
import { useAuth } from '../services/auth-context';
import contractorTypesJson from '../constants/contractorTypes.json';
import { updateFeatureWithDates, GeoJSONFeature } from '../services/supabaseService';

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
  const isAdmin = userData?.role === 'admin';
  const isContractor = userData?.role === 'contractor';
  
  // Debug the contractor matching logic
  const effectiveContractorType = userData?.contractorType || 'Contractor-Cleanup';
  const contractorTypeMatch = userData && jobType && contractorTypes[effectiveContractorType]?.includes(jobType);
  
  const allowedForContractor = isContractor && contractorTypeMatch;
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const handleClaimJob = async () => {
    if (!feature) return;
    setSaving(true);
    setSaveError(null);

    try {
      // Debug feature structure
      console.log('[PointPopup] Feature:', feature);
      console.log('[PointPopup] Feature ID:', feature.id);
      console.log('[PointPopup] Feature properties:', feature.properties);
      
      // Use feature.id first, then fallback to database_id in properties
      const featureId = feature.id || (feature.properties as any)?.database_id;
      
      if (!featureId) {
        throw new Error('Feature ID not found - neither feature.id nor properties.database_id found');
      }
      
      console.log('[PointPopup] Using featureId:', featureId);

      const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      const updatedProperties = { 
        ...feature.properties, 
        Status: 'Pending'
        // Note: Contractor is stored as a separate field, not in properties
      };

      console.log('[PointPopup] Calling updateFeatureWithDates with:', {
        properties: updatedProperties,
        DateClaimed: now,
        Contractor: userData?.email
      });

      await updateFeatureWithDates('addpoints', featureId, {
        properties: updatedProperties,
        DateClaimed: now,
        Contractor: userData?.email // Store contractor email in separate field
      });

      console.log('[PointPopup] Successfully claimed job');
      
      if (onStatusUpdate) onStatusUpdate('Pending');
      setSaving(false);
      onClose();
    } catch (err: any) {
      console.error('[PointPopup] Error claiming job:', err);
      setSaveError(`Failed to claim job: ${err.message}`);
      setSaving(false);
    }
  };

  const handleCompleteJob = async () => {
    if (!feature) return;
    setSaving(true);
    setSaveError(null);

    try {
      // Use feature.id first, then fallback to database_id in properties
      const featureId = feature.id || (feature.properties as any)?.database_id;
      
      if (!featureId) {
        throw new Error('Feature ID not found - neither feature.id nor properties.database_id found');
      }

      console.log('[PointPopup] Completing job with featureId:', featureId);

      const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      const updatedProperties = { 
        ...feature.properties, 
        Status: 'Complete'
        // Note: Contractor is maintained as a separate field, not in properties
      };

      console.log('[PointPopup] Calling updateFeatureWithDates for completion with:', {
        properties: updatedProperties,
        DateCompleted: now
      });

      await updateFeatureWithDates('addpoints', featureId, {
        properties: updatedProperties,
        DateCompleted: now
        // Contractor field is already set from claiming, so no need to update it
      });

      console.log('[PointPopup] Successfully completed job');

      if (onStatusUpdate) onStatusUpdate('Complete');
      setSaving(false);
      onClose();
    } catch (err: any) {
      console.error('[PointPopup] Error completing job:', err);
      setSaveError(`Failed to complete job: ${err.message}`);
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div
                  className="point-popup-status"
                  style={{
                    backgroundColor: getStatusColor(status).bg,
                    color: getStatusColor(status).text
                  }}
                >
                  {status || 'Unknown'}
                </div>
                {(() => {
                  const currentStatus = (status || '').toLowerCase();
                  const jobContractor = feature?.properties?.Contractor;
                  const currentUserEmail = userData?.email;
                  
                  if (currentStatus !== 'pending' && currentStatus !== 'complete') {
                    return (
                      <button
                        className="edit-button"
                        style={{ 
                          minWidth: 80,
                          backgroundColor: '#2563eb',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                        onClick={handleClaimJob}
                        disabled={saving}
                      >
                        {saving ? 'Claiming...' : 'Claim it'}
                      </button>
                    );
                  } else if (currentStatus === 'pending' && jobContractor === currentUserEmail) {
                    // Only show complete button if current user is the contractor who claimed it
                    return (
                      <button
                        className="edit-button"
                        style={{ 
                          minWidth: 80,
                          backgroundColor: '#16a34a',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                        onClick={handleCompleteJob}
                        disabled={saving}
                      >
                        {saving ? 'Completing...' : 'Complete!'}
                      </button>
                    );
                  } else if (currentStatus === 'pending' && jobContractor !== currentUserEmail) {
                    // Show status only if job is claimed by someone else
                    return (
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                        Claimed by: {jobContractor || 'Unknown'}
                      </div>
                    );
                  }
                  return null;
                })()}
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
            {/* Contractor */}
            <div>
              <div className="point-popup-label">Contractor</div>
              <div className="point-popup-value">
                {feature?.properties?.Contractor || 'N/A'}
              </div>
            </div>
            {/* Date Claimed */}
            <div>
              <div className="point-popup-label">Date Claimed</div>
              <div className="point-popup-value">
                {feature?.properties?.DateClaimed 
                  ? new Date(feature.properties.DateClaimed).toLocaleDateString()
                  : 'N/A'
                }
              </div>
            </div>
            {/* Date Completed */}
            <div>
              <div className="point-popup-label">Date Completed</div>
              <div className="point-popup-value">
                {feature?.properties?.DateCompleted 
                  ? new Date(feature.properties.DateCompleted).toLocaleDateString()
                  : 'N/A'
                }
              </div>
            </div>
            {/* Debug info - show ID fields */}
            <div>
              <div className="point-popup-label">Debug - Feature ID</div>
              <div className="point-popup-value" style={{ fontSize: '12px', color: '#666' }}>
                feature.id: {feature?.id || 'undefined'}<br/>
                database_id: {(feature?.properties as any)?.database_id || 'undefined'}
              </div>
            </div>
          </div>
        )}
        {/* Show date info for contractors too when available */}
        {allowedForContractor && !isAdmin && (feature?.properties?.DateClaimed || feature?.properties?.DateCompleted || feature?.properties?.Contractor) && (
          <div className="point-popup-row" style={{ marginTop: '12px' }}>
            {feature?.properties?.Contractor && (
              <div>
                <div className="point-popup-label">Claimed by</div>
                <div className="point-popup-value">
                  {feature.properties.Contractor}
                </div>
              </div>
            )}
            {feature?.properties?.DateClaimed && (
              <div>
                <div className="point-popup-label">Date Claimed</div>
                <div className="point-popup-value">
                  {new Date(feature.properties.DateClaimed).toLocaleDateString()}
                </div>
              </div>
            )}
            {feature?.properties?.DateCompleted && (
              <div>
                <div className="point-popup-label">Date Completed</div>
                <div className="point-popup-value">
                  {new Date(feature.properties.DateCompleted).toLocaleDateString()}
                </div>
              </div>
            )}
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