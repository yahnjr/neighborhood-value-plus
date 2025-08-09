import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartBar, faUsers, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

interface AnalyticsLeftPanelProps {
  onClose: () => void;
}

const AnalyticsLeftPanel: React.FC<AnalyticsLeftPanelProps> = ({ onClose }) => {
  return (
    <div className="analytics-panel left-panel">
      <div className="panel-header">
        <h3>
          <FontAwesomeIcon icon={faChartBar} /> Analytics Dashboard
        </h3>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      
      <div className="panel-content">
        <div className="analytics-section">
          <h4><FontAwesomeIcon icon={faUsers} /> User Activity</h4>
          <div className="analytics-item">
            <span className="label">Total Points Added:</span>
            <span className="value">1,247</span>
          </div>
          <div className="analytics-item">
            <span className="label">Active Users (30 days):</span>
            <span className="value">89</span>
          </div>
          <div className="analytics-item">
            <span className="label">New Registrations:</span>
            <span className="value">23</span>
          </div>
        </div>

        <div className="analytics-section">
          <h4><FontAwesomeIcon icon={faMapMarkedAlt} /> Service Types</h4>
          <div className="service-type-list">
            <div className="service-item">
              <span className="color-indicator" style={{ backgroundColor: '#008000' }}></span>
              <span className="label">Lawn Restoration:</span>
              <span className="count">342</span>
            </div>
            <div className="service-item">
              <span className="color-indicator" style={{ backgroundColor: '#808080' }}></span>
              <span className="label">Sidewalk Repair:</span>
              <span className="count">189</span>
            </div>
            <div className="service-item">
              <span className="color-indicator" style={{ backgroundColor: '#FFA500' }}></span>
              <span className="label">Homeless Outreach:</span>
              <span className="count">156</span>
            </div>
            <div className="service-item">
              <span className="color-indicator" style={{ backgroundColor: '#FFD700' }}></span>
              <span className="label">Legacy Sponsored:</span>
              <span className="count">98</span>
            </div>
            <div className="service-item">
              <span className="color-indicator" style={{ backgroundColor: '#000000' }}></span>
              <span className="label">Trash/Debris:</span>
              <span className="count">76</span>
            </div>
          </div>
        </div>

        <div className="analytics-section">
          <h4>Quick Actions</h4>
          <button className="analytics-action-btn">
            Export Data (CSV)
          </button>
          <button className="analytics-action-btn">
            Generate Report
          </button>
          <button className="analytics-action-btn">
            View Trends
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsLeftPanel;
