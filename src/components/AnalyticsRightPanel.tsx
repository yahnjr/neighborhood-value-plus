import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartLine, faCalendarAlt, faFilter } from '@fortawesome/free-solid-svg-icons';

interface AnalyticsRightPanelProps {
  onClose: () => void;
}

const AnalyticsRightPanel: React.FC<AnalyticsRightPanelProps> = ({ onClose }) => {
  return (
    <div className="analytics-panel right-panel">
      <div className="panel-header">
        <h3>
          <FontAwesomeIcon icon={faChartLine} /> Analytics Controls
        </h3>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      
      <div className="panel-content">
        <div className="analytics-section">
          <h4><FontAwesomeIcon icon={faCalendarAlt} /> Time Range</h4>
          <select className="analytics-select">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
            <option value="all">All time</option>
          </select>
        </div>

        <div className="analytics-section">
          <h4><FontAwesomeIcon icon={faFilter} /> Data Filters</h4>
          
          <div className="filter-group">
            <label>Neighborhoods:</label>
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Pearl District</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Hawthorne</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Alberta</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Sellwood</span>
              </label>
            </div>
          </div>

          <div className="filter-group">
            <label>Service Types:</label>
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Lawn Restoration</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Sidewalk Repair</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Homeless Outreach</span>
              </label>
            </div>
          </div>
        </div>

        <div className="analytics-section">
          <h4>Heatmap Settings</h4>
          <div className="heatmap-controls">
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked />
              <span>Enable Heatmap View</span>
            </label>
            
            <div className="slider-group">
              <label>Intensity:</label>
              <input type="range" min="0.1" max="2" step="0.1" defaultValue="1" className="analytics-slider" />
            </div>
            
            <div className="slider-group">
              <label>Radius:</label>
              <input type="range" min="10" max="100" step="5" defaultValue="50" className="analytics-slider" />
            </div>
          </div>
        </div>

        <div className="analytics-section">
          <h4>Chart Type</h4>
          <div className="chart-type-buttons">
            <button className="chart-type-btn active">Heatmap</button>
            <button className="chart-type-btn">Density</button>
            <button className="chart-type-btn">Clusters</button>
          </div>
        </div>

        <div className="analytics-section">
          <button className="analytics-apply-btn">
            Apply Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsRightPanel;
