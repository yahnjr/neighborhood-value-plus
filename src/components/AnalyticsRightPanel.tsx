import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartLine, faCalendarAlt, faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { SERVICE_TYPES } from '../constants/serviceTypes';
import { FilterState } from './FilterPanel';

// Import the same neighborhood data as the filter panel
const NEIGHBORHOODS = [
  { id: 'brentwood-darlington', name: 'Brentwood-Darlington' },
  { id: 'centennial', name: 'Centennial' },
  { id: 'centennial-pleasant-valley', name: 'Centennial/Pleasant-Valley' },
  { id: 'creston-kenilworth', name: 'Creston-Kenilworth' },
  { id: 'eastmoreland', name: 'Eastmoreland' },
  { id: 'eastmoreland-reed', name: 'Eastmoreland/Reed' },
  { id: 'foster-powell', name: 'Foster-Powell' },
  { id: 'gilbert', name: 'Gilbert' },
  { id: 'glenfair', name: 'Glenfair' },
  { id: 'hazelwood', name: 'Hazelwood' },
  { id: 'hazelwood-mill-park', name: 'Hazelwood/Mill Park' },
  { id: 'laurelhurst', name: 'Laurelhurst' },
  { id: 'lents', name: 'Lents' },
  { id: 'lents-powellhurst-gilbert', name: 'Lents/Powellhurst-Gilbert' },
  { id: 'mill-park', name: 'Mill Park' },
  { id: 'montavilla', name: 'Montavilla' },
  { id: 'mt-scott-arleta', name: 'Mt. Scott-Arleta' },
  { id: 'mt-tabor', name: 'Mt. Tabor' },
  { id: 'north-tabor', name: 'North Tabor' },
  { id: 'pleasant-valley', name: 'Pleasant Valley' },
  { id: 'pleasant-valley-powellhurst-gilbert', name: 'Pleasant Valley/Powellhurst-Gilbert' },
  { id: 'powellhurst-gilbert', name: 'Powellhurst-Gilbert' },
  { id: 'reed', name: 'Reed' },
  { id: 'richmond', name: 'Richmond' },
  { id: 'south-tabor', name: 'South Tabor' },
  { id: 'sunnyside', name: 'Sunnyside' },
  { id: 'woodstock', name: 'Woodstock' },
];

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
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    filters?.selectedNeighborhoods || []
  );
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>(
    filters?.selectedServiceTypes || []
  );
  const [datePreset, setDatePreset] = useState<string>(
    filters?.dateRange?.preset || '30d'
  );
  const [heatmapEnabled, setHeatmapEnabled] = useState<boolean>(
    filters?.heatmapSettings?.enabled ?? true
  );
  const [heatmapIntensity, setHeatmapIntensity] = useState<number>(
    filters?.heatmapSettings?.intensity ?? 1
  );
  const [heatmapRadius, setHeatmapRadius] = useState<number>(
    filters?.heatmapSettings?.radius ?? 50
  );
  const [isNeighborhoodsOpen, setIsNeighborhoodsOpen] = useState(false);
  const [isServiceTypesOpen, setIsServiceTypesOpen] = useState(false);

  // Helper function to convert preset to date range
  const getDateRangeFromPreset = (preset: string) => {
    const now = new Date();
    let startDate: Date | null = null;
    let endDate: Date | null = new Date(now);

    switch (preset) {
      case '7d':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 90);
        break;
      case '1y':
        startDate = new Date(now);
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      case 'all':
        startDate = null;
        endDate = null;
        break;
      default:
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 30);
    }

    return { startDate, endDate };
  };

  // Update parent component when filters change
  const updateFilters = () => {
    if (onFiltersChange) {
      const dateRange = getDateRangeFromPreset(datePreset);
      onFiltersChange({
        selectedNeighborhoods,
        selectedServiceTypes,
        dateRange: {
          ...dateRange,
          preset: datePreset as '7d' | '30d' | '90d' | '1y' | 'all' | 'custom'
        },
        heatmapSettings: {
          enabled: heatmapEnabled,
          intensity: heatmapIntensity,
          radius: heatmapRadius
        }
      });
    }
  };

  useEffect(() => {
    updateFilters();
  }, [selectedNeighborhoods, selectedServiceTypes, datePreset, heatmapEnabled, heatmapIntensity, heatmapRadius]);

  const handleNeighborhoodToggle = (neighborhood: string) => {
    setSelectedNeighborhoods(prev => 
      prev.includes(neighborhood) 
        ? prev.filter(n => n !== neighborhood)
        : [...prev, neighborhood]
    );
  };

  const handleServiceTypeToggle = (serviceType: string) => {
    setSelectedServiceTypes(prev => 
      prev.includes(serviceType) 
        ? prev.filter(st => st !== serviceType)
        : [...prev, serviceType]
    );
  };

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
          <select 
            className="analytics-select" 
            value={datePreset} 
            onChange={(e) => setDatePreset(e.target.value)}
          >
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
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle"
                onClick={() => setIsNeighborhoodsOpen(!isNeighborhoodsOpen)}
              >
                {selectedNeighborhoods.length === 0 
                  ? "Select neighborhoods..." 
                  : `${selectedNeighborhoods.length} selected`
                }
                <FontAwesomeIcon icon={isNeighborhoodsOpen ? faChevronUp : faChevronDown} />
              </button>
              {isNeighborhoodsOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-controls">
                    <button 
                      className="dropdown-control-btn"
                      onClick={() => setSelectedNeighborhoods(NEIGHBORHOODS.map(n => n.name))}
                    >
                      Select All
                    </button>
                    <button 
                      className="dropdown-control-btn"
                      onClick={() => setSelectedNeighborhoods([])}
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="dropdown-options">
                    {NEIGHBORHOODS.map(neighborhood => (
                      <label key={neighborhood.id} className="dropdown-option">
                        <input 
                          type="checkbox" 
                          checked={selectedNeighborhoods.includes(neighborhood.name)}
                          onChange={() => handleNeighborhoodToggle(neighborhood.name)}
                        />
                        <span>{neighborhood.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="filter-group">
            <label>Service Types:</label>
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle"
                onClick={() => setIsServiceTypesOpen(!isServiceTypesOpen)}
              >
                {selectedServiceTypes.length === 0 
                  ? "Select service types..." 
                  : `${selectedServiceTypes.length} selected`
                }
                <FontAwesomeIcon icon={isServiceTypesOpen ? faChevronUp : faChevronDown} />
              </button>
              {isServiceTypesOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-controls">
                    <button 
                      className="dropdown-control-btn"
                      onClick={() => setSelectedServiceTypes(SERVICE_TYPES.map(st => st.name))}
                    >
                      Select All
                    </button>
                    <button 
                      className="dropdown-control-btn"
                      onClick={() => setSelectedServiceTypes([])}
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="dropdown-options">
                    {SERVICE_TYPES.map(serviceType => (
                      <label key={serviceType.id} className="dropdown-option">
                        <input 
                          type="checkbox" 
                          checked={selectedServiceTypes.includes(serviceType.name)}
                          onChange={() => handleServiceTypeToggle(serviceType.name)}
                        />
                        <span style={{ color: serviceType.color }}>
                          <FontAwesomeIcon icon={serviceType.icon} /> {serviceType.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default AnalyticsRightPanel;
