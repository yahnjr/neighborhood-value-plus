import React, { useMemo, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChartBar, faUsers, faMapMarkedAlt, faCalendarAlt, faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { GeoJSON, GeoJSONFeature } from '../services/supabaseService';
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

interface AnalyticsLeftPanelProps {
  onClose: () => void;
  geoJsonData: { [key: string]: GeoJSON };
  filters?: FilterState;
  onFiltersChange?: (filters: FilterState) => void;
}

const AnalyticsLeftPanel: React.FC<AnalyticsLeftPanelProps> = ({ onClose, geoJsonData, filters, onFiltersChange }) => {
  // Filter state management
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    filters?.selectedNeighborhoods || []
  );
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>(
    filters?.selectedServiceTypes?.length ? filters.selectedServiceTypes : SERVICE_TYPES.map(st => st.name)
  );
  const [datePreset, setDatePreset] = useState<string>(
    filters?.dateRange?.preset || '30d'
  );
  const [isNeighborhoodsOpen, setIsNeighborhoodsOpen] = useState(false);

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

  // Update filters when local state changes
  useEffect(() => {
    if (onFiltersChange) {
      const dateRange = getDateRangeFromPreset(datePreset);
      
      // Only update if something actually changed
      const hasNeighborhoodChange = !filters?.selectedNeighborhoods || 
        JSON.stringify(filters.selectedNeighborhoods.sort()) !== JSON.stringify(selectedNeighborhoods.sort());
      
      const hasServiceTypeChange = !filters?.selectedServiceTypes || 
        JSON.stringify(filters.selectedServiceTypes.sort()) !== JSON.stringify(selectedServiceTypes.sort());
        
      const hasDateChange = !filters?.dateRange || 
        filters.dateRange.preset !== datePreset;
      
      if (hasNeighborhoodChange || hasServiceTypeChange || hasDateChange) {
        onFiltersChange({
          selectedNeighborhoods,
          selectedServiceTypes,
          dateRange: {
            ...dateRange,
            preset: datePreset as "7d" | "30d" | "90d" | "1y" | "all" | "custom"
          },
          heatmapSettings: filters?.heatmapSettings || {
            enabled: true,
            intensity: 1,
            radius: 50
          }
        });
      }
    }
  }, [selectedNeighborhoods, selectedServiceTypes, datePreset]);

  // Handle neighborhood toggle
  const handleNeighborhoodToggle = (neighborhood: string) => {
    setSelectedNeighborhoods(prev => 
      prev.includes(neighborhood)
        ? prev.filter(n => n !== neighborhood)
        : [...prev, neighborhood]
    );
  };

  // Handle service type toggle
  const handleServiceTypeToggle = (serviceType: string) => {
    setSelectedServiceTypes(prev => 
      prev.includes(serviceType)
        ? prev.filter(st => st !== serviceType)
        : [...prev, serviceType]
    );
  };
  // Calculate analytics from real data
  const analytics = useMemo(() => {
    const addpoints = geoJsonData.addpoints?.features || [];
    
    // Apply date filtering
    const { startDate, endDate } = getDateRangeFromPreset(datePreset);
    const filteredPoints = addpoints.filter((feature: GeoJSONFeature) => {
      // If no date range is set (preset is 'all'), include all points
      if (!startDate || !endDate) {
        return true;
      }
      
      // Get the created_at timestamp from the feature properties
      const createdAt = feature.properties?.created_at;
      if (!createdAt) {
        return false; // Exclude points without a created_at timestamp
      }
      
      // Parse the timestamp - Supabase returns ISO strings
      const createdDate = new Date(createdAt);
      
      // Handle invalid dates
      if (isNaN(createdDate.getTime())) {
        return false;
      }
      
      // Normalize dates to compare only date parts (ignore time)
      const createdDateOnly = new Date(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate());
      const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      
      // Check if the date is within the range (inclusive)
      return createdDateOnly >= startDateOnly && createdDateOnly <= endDateOnly;
    });
    
    // Count total points (after date filtering)
    const totalPoints = filteredPoints.length;
    
    // Count by service type
    const serviceTypeCounts: { [key: string]: number } = {};
    const statusCounts: { [key: string]: number } = {};
    
    filteredPoints.forEach((feature: GeoJSONFeature) => {
      const serviceType = feature.properties?.Service_Ty || 'Unknown';
      const status = feature.properties?.Status || 'Unclaimed';
      
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
  }, [geoJsonData, datePreset]);

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
            <span className="label">Unclaimed:</span>
            <span className="value">{analytics.statusCounts['Unclaimed'] || 0}</span>
          </div>
          <div className="analytics-item">
            <span className="label">Claimed:</span>
            <span className="value">{analytics.statusCounts['Claimed'] || 0}</span>
          </div>
          <div className="analytics-item">
            <span className="label">Completed:</span>
            <span className="value">{analytics.statusCounts['Completed'] || 0}</span>
          </div>
        </div>

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
          <h4><FontAwesomeIcon icon={faMapMarkedAlt} /> Service Types</h4>
          <div className="filter-controls">
            <button 
              className="analytics-action-btn"
              onClick={() => setSelectedServiceTypes(analytics.serviceTypesList.map(st => st.name))}
            >
              Select All Types
            </button>
            <button 
              className="analytics-action-btn"
              onClick={() => setSelectedServiceTypes([])}
            >
              Clear All Types
            </button>
          </div>
          <div className="service-type-list">
            {analytics.serviceTypesList.map((serviceType) => (
              <div 
                key={serviceType.name} 
                className={`service-item clickable ${selectedServiceTypes.includes(serviceType.name) ? 'active' : 'inactive'}`}
                onClick={() => handleServiceTypeToggle(serviceType.name)}
              >
                <input 
                  type="checkbox" 
                  checked={selectedServiceTypes.includes(serviceType.name)}
                  onChange={() => handleServiceTypeToggle(serviceType.name)}
                  onClick={(e) => e.stopPropagation()}
                />
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
        </div>
      </div>
    </div>
  );
};

export default AnalyticsLeftPanel;
