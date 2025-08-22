import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FilterState } from './FilterPanel';

interface AnalyticsRightPanelProps {
  onClose: () => void;
  filters?: FilterState;
  onFiltersChange?: (filters: FilterState) => void;
}

const AnalyticsRightPanel: React.FC<AnalyticsRightPanelProps> = ({ 
  onClose, 
  filters, 
  onFiltersChange 
}) => {
  const [heatmapEnabled, setHeatmapEnabled] = useState<boolean>(
    filters?.heatmapSettings?.enabled ?? true
  );
  const [heatmapIntensity, setHeatmapIntensity] = useState<number>(
    filters?.heatmapSettings?.intensity ?? 1
  );
  const [heatmapRadius, setHeatmapRadius] = useState<number>(
    filters?.heatmapSettings?.radius ?? 50
  );

  // Update filters when heatmap settings change
  useEffect(() => {
    if (onFiltersChange && filters) {
      // Only update if the heatmap settings actually changed
      const currentHeatmap = filters.heatmapSettings;
      if (
        !currentHeatmap ||
        currentHeatmap.enabled !== heatmapEnabled ||
        currentHeatmap.intensity !== heatmapIntensity ||
        currentHeatmap.radius !== heatmapRadius
      ) {
        onFiltersChange({
          ...filters,
          heatmapSettings: {
            enabled: heatmapEnabled,
            intensity: heatmapIntensity,
            radius: heatmapRadius
          }
        });
      }
    }
  }, [heatmapEnabled, heatmapIntensity, heatmapRadius]);

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
          <h4>Heatmap Settings</h4>
          <div className="heatmap-controls">
            <label className="checkbox-item">
              <input 
                type="checkbox" 
                checked={heatmapEnabled}
                onChange={(e) => setHeatmapEnabled(e.target.checked)}
              />
              <span>Enable Heatmap View</span>
            </label>
            
            <div className="slider-group">
              <label>Intensity: {heatmapIntensity.toFixed(1)}</label>
              <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.1" 
                value={heatmapIntensity}
                onChange={(e) => setHeatmapIntensity(parseFloat(e.target.value))}
                className="analytics-slider" 
              />
            </div>
            
            <div className="slider-group">
              <label>Radius: {heatmapRadius}px</label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5" 
                value={heatmapRadius}
                onChange={(e) => setHeatmapRadius(parseInt(e.target.value))}
                className="analytics-slider" 
              />
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
  );
};

export default AnalyticsRightPanel;
