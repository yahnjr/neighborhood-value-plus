import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faChevronDown, 
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { SERVICE_TYPES } from '../constants/serviceTypes';

// Define types for our filter data
export interface Neighborhood {
  id: string;
  name: string;
}

export interface FilterState {
  selectedNeighborhoods: string[];
  selectedServiceTypes: string[];
}

interface FilterPanelProps {
  onClose: () => void;
  onFiltersChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

// Define our neighborhoods
const NEIGHBORHOODS: Neighborhood[] = [
  { id: 'powellhurst-gilbert', name: 'Powellhurst-Gilbert' },
  { id: 'lents', name: 'Lents' },
  { id: 'foster-powell', name: 'Foster-Powell' },
  { id: 'mt-scott-arleta', name: 'Mt. Scott-Arleta' },
  { id: 'brentwood-darlington', name: 'Brentwood-Darlington' },
  { id: 'woodstock', name: 'Woodstock' },
  { id: 'gilbert', name: 'Gilbert' },
  { id: 'pleasant-valley', name: 'Pleasant Valley' },
  { id: 'centennial', name: 'Centennial' },
  { id: 'mill-park', name: 'Mill Park' },
  { id: 'south-tabor', name: 'South Tabor' },
];

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  onClose, 
  onFiltersChange, 
  initialFilters 
}) => {
  // Initialize state with all items selected by default
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    initialFilters?.selectedNeighborhoods?.length ? initialFilters.selectedNeighborhoods : NEIGHBORHOODS.map(n => n.name)
  );
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>(
    initialFilters?.selectedServiceTypes?.length ? initialFilters.selectedServiceTypes : SERVICE_TYPES.map(s => s.name)
  );

  // Collapse states - only one can be open at a time
  const [isNeighborhoodsCollapsed, setIsNeighborhoodsCollapsed] = useState(true);
  const [isServiceTypesCollapsed, setIsServiceTypesCollapsed] = useState(true);

  // Handle neighborhood collapse with accordion behavior
  const handleNeighborhoodCollapse = () => {
    if (isNeighborhoodsCollapsed) {
      setIsNeighborhoodsCollapsed(false);
      setIsServiceTypesCollapsed(true);
    } else {
      setIsNeighborhoodsCollapsed(true);
    }
  };

  // Handle service type collapse with accordion behavior
  const handleServiceTypeCollapse = () => {
    if (isServiceTypesCollapsed) {
      setIsServiceTypesCollapsed(false);
      setIsNeighborhoodsCollapsed(true);
    } else {
      setIsServiceTypesCollapsed(true);
    }
  };

  // Handle neighborhood checkbox changes
  const handleNeighborhoodChange = (neighborhoodId: string) => {
    const neighborhoodName = NEIGHBORHOODS.find(n => n.id === neighborhoodId)?.name;
    if (!neighborhoodName) return;
    setSelectedNeighborhoods(prev => {
      if (prev.includes(neighborhoodName)) {
        return prev.filter(name => name !== neighborhoodName);
      } else {
        return [...prev, neighborhoodName];
      }
    });
  };

  // Handle service type selection
  const handleServiceTypeChange = (serviceTypeName: string) => {
    setSelectedServiceTypes(prev => {
      if (prev.includes(serviceTypeName)) {
        return prev.filter(name => name !== serviceTypeName);
      } else {
        return [...prev, serviceTypeName];
      }
    });
  };

  // Handle "Select All Neighborhoods"
  const handleSelectAllNeighborhoods = () => {
    setSelectedNeighborhoods(NEIGHBORHOODS.map(n => n.name));
  };

  // Handle "Select All Service Types"
  const handleSelectAllServiceTypes = () => {
    setSelectedServiceTypes(SERVICE_TYPES.map(s => s.name));
  };

  // Apply filters
  const handleApplyFilters = () => {
    const filters: FilterState = {
      selectedNeighborhoods,
      selectedServiceTypes,
    };
    onFiltersChange(filters);
  };

  // Clear all filters (select all)
  const handleClearFilters = () => {
    setSelectedNeighborhoods(NEIGHBORHOODS.map(n => n.name));
    setSelectedServiceTypes(SERVICE_TYPES.map(s => s.name));
    const filters: FilterState = {
      selectedNeighborhoods: NEIGHBORHOODS.map(n => n.name),
      selectedServiceTypes: SERVICE_TYPES.map(s => s.name),
    };
    onFiltersChange(filters);
  };

  return (
    <div className="header-panel filter-panel">
      <div className="panel-header">
        <h3>Filter Options</h3>
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="panel-content">
        {/* Neighborhoods Section */}
        <div className="filter-section">
          <div className="filter-section-header">
            <h4>Neighborhoods</h4>
            <span className="filter-count">({selectedNeighborhoods.length})</span>
            <button 
              className="collapse-btn"
              onClick={handleNeighborhoodCollapse}
            >
              <FontAwesomeIcon icon={isNeighborhoodsCollapsed ? faChevronDown : faChevronUp} />
            </button>
          </div>
          <div className="filter-section-controls">
            <button 
              className="select-all-btn"
              onClick={handleSelectAllNeighborhoods}
            >
              Select All
            </button>
            <button 
              className="unselect-all-btn"
              onClick={() => setSelectedNeighborhoods([])}
            >
              Unselect All
            </button>
          </div>
          {!isNeighborhoodsCollapsed && (
            <div className="filter-options neighborhoods-scroll">
              {NEIGHBORHOODS.map(neighborhood => (
                <label key={neighborhood.id}>
                  <input 
                    type="checkbox" 
                    checked={selectedNeighborhoods.includes(neighborhood.name)}
                    onChange={() => handleNeighborhoodChange(neighborhood.id)}
                  />
                  {neighborhood.name}
                </label>
              ))}
            </div>
          )}
        </div>
        
        {/* Service Types Section */}
        <div className="filter-section">
          <div className="filter-section-header">
            <h4>Service Types</h4>
            <span className="filter-count">({selectedServiceTypes.length})</span>
            <button 
              className="collapse-btn"
              onClick={handleServiceTypeCollapse}
            >
              <FontAwesomeIcon icon={isServiceTypesCollapsed ? faChevronDown : faChevronUp} />
            </button>
          </div>
          <div className="filter-section-controls">
            <button 
              className="select-all-btn"
              onClick={handleSelectAllServiceTypes}
            >
              Select All
            </button>
            <button 
              className="unselect-all-btn"
              onClick={() => setSelectedServiceTypes([])}
            >
              Unselect All
            </button>
          </div>
          {!isServiceTypesCollapsed && (
            <div className="service-types-scroll">
              <div className="service-type-buttons">
                {SERVICE_TYPES.map(serviceType => {
                  const isSelected = selectedServiceTypes.includes(serviceType.name);
                  return (
                    <button
                      key={serviceType.id}
                      className={`service-type-btn ${isSelected ? 'selected' : ''}`}
                      style={{
                        backgroundColor: isSelected ? serviceType.color : 'white',
                        borderColor: serviceType.color,
                        color: isSelected ? 'white' : 'black'
                      }}
                      onClick={() => handleServiceTypeChange(serviceType.name)}
                      title={serviceType.name}
                    >
                      <FontAwesomeIcon icon={serviceType.icon} className="service-icon" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="filter-actions">
          <button className="apply-filters-btn" onClick={handleApplyFilters}>
            Apply Filters
          </button>
          <button className="clear-filters-btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;