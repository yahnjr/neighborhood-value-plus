import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartBar, faUsers, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { GeoJSON, GeoJSONFeature } from '../services/supabaseService';
import { SERVICE_TYPES } from '../constants/serviceTypes';

interface AnalyticsLeftPanelProps {
  onClose: () => void;
  geoJsonData: { [key: string]: GeoJSON };
}

const AnalyticsLeftPanel: React.FC<AnalyticsLeftPanelProps> = ({ onClose, geoJsonData }) => {
  // Calculate analytics from real data
  const analytics = useMemo(() => {
    const addpoints = geoJsonData.addpoints?.features || [];
    
    // Count total points
    const totalPoints = addpoints.length;
    
    // Count by service type
    const serviceTypeCounts: { [key: string]: number } = {};
    const statusCounts: { [key: string]: number } = {};
    
    addpoints.forEach((feature: GeoJSONFeature) => {
      const serviceType = feature.properties?.Service_Ty || 'Unknown';
      const status = feature.properties?.Status || 'Open';
      
      serviceTypeCounts[serviceType] = (serviceTypeCounts[serviceType] || 0) + 1;
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    // Get service type colors from constants
    const serviceTypesList = Object.entries(serviceTypeCounts)
      .map(([name, count]) => {
        const serviceType = SERVICE_TYPES.find(st => st.name === name);
        return {
          name,
          count,
          color: serviceType?.color || '#999999'
        };
      })
      .sort((a, b) => b.count - a.count);

    return {
      totalPoints,
      serviceTypesList,
      statusCounts
    };
  }, [geoJsonData]);

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
          <h4><FontAwesomeIcon icon={faUsers} /> Service Point Statistics</h4>
          <div className="analytics-item">
            <span className="label">Total Points Added:</span>
            <span className="value">{analytics.totalPoints.toLocaleString()}</span>
          </div>
          <div className="analytics-item">
            <span className="label">Open:</span>
            <span className="value">{analytics.statusCounts['Open'] || 0}</span>
          </div>
          <div className="analytics-item">
            <span className="label">Pending:</span>
            <span className="value">{analytics.statusCounts['Pending'] || 0}</span>
          </div>
          <div className="analytics-item">
            <span className="label">Complete:</span>
            <span className="value">{analytics.statusCounts['Complete'] || 0}</span>
          </div>
        </div>

        <div className="analytics-section">
          <h4><FontAwesomeIcon icon={faMapMarkedAlt} /> Service Types</h4>
          <div className="service-type-list">
            {analytics.serviceTypesList.map((serviceType) => (
              <div key={serviceType.name} className="service-item">
                <span className="color-indicator" style={{ backgroundColor: serviceType.color }}></span>
                <span className="label">{serviceType.name}:</span>
                <span className="count">{serviceType.count}</span>
              </div>
            ))}
            {analytics.serviceTypesList.length === 0 && (
              <div className="service-item">
                <span className="label">No data available</span>
              </div>
            )}
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
