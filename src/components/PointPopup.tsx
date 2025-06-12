import React from 'react';
import { useAuth } from '../services/auth-context';

interface PointPopupProps {
  jobType?: string;
  location?: string;
  status?: string;
  fullAddress?: string;
  referralSource?: string;
  estimate?: string;
  onClose: () => void;
  onEdit: () => void;
}

const PointPopup: React.FC<PointPopupProps> = ({
  jobType,
  location,
  status,
  fullAddress,
  referralSource,
  estimate,
  onClose,
  onEdit
}) => {
  const { userData } = useAuth();
  const isAdmin = userData?.role === 'Admin';

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
            <div
              className="point-popup-status"
              style={{
                backgroundColor: getStatusColor(status).bg,
                color: getStatusColor(status).text
              }}
            >
              {status || 'Unknown'}
            </div>
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
      {isAdmin && (
        <div className="point-popup-footer">
          <button className="edit-button" onClick={onEdit}>
            Edit
          </button>
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