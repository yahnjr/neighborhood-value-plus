import React, { useState, useEffect } from 'react';
import { useAuth } from '../services/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTable, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { GeoJSONFeature } from '../services/supabaseService';
import { FilterState } from './FilterPanel';

interface ContractorJobTableProps {
  isOpen: boolean;
  onClose: () => void;
  geoJsonData: any;
  onJobClick: (feature: GeoJSONFeature) => void;
  filters?: FilterState;
}

interface JobData {
  id: string;
  feature: GeoJSONFeature;
  serviceType: string;
  location: string;
  status: string;
  neighborhood: string;
  dateCreated: string;
  contractor?: string;
}

const ContractorJobTable: React.FC<ContractorJobTableProps> = ({
  isOpen,
  onClose,
  geoJsonData,
  onJobClick,
  filters
}) => {
  const { userData } = useAuth();
  const [jobs, setJobs] = useState<JobData[]>([]);
  const [activeTab, setActiveTab] = useState<'unclaimed' | 'claimed'>('unclaimed');

  // Function to get filtered addpoints data based on filters (for table)
  const getFilteredAddpoints = () => {
    if (!geoJsonData?.addpoints?.features) return [];

    let filteredFeatures = geoJsonData.addpoints.features;

    // Apply neighborhood filter if filters are provided
    if (filters?.selectedNeighborhoods && filters.selectedNeighborhoods.length > 0) {
      filteredFeatures = filteredFeatures.filter((feature: GeoJSONFeature) => {
        const neighborhood = feature.properties?.neighbhood;
        return filters.selectedNeighborhoods.includes(neighborhood);
      });
    }

    // Apply service type filter if filters are provided
    if (filters?.selectedServiceTypes && filters.selectedServiceTypes.length > 0) {
      filteredFeatures = filteredFeatures.filter((feature: GeoJSONFeature) => {
        const serviceType = feature.properties?.["Service_Ty"];
        return filters.selectedServiceTypes.includes(serviceType);
      });
    }

    // Apply date range filter if specified
    if (filters?.dateRange && (filters.dateRange.startDate || filters.dateRange.endDate)) {
      filteredFeatures = filteredFeatures.filter((feature: GeoJSONFeature) => {
        const createdAt = feature.properties?.created_at;
        if (!createdAt) return true; // Include features without dates
        
        const featureDate = new Date(createdAt);
        
        // Check start date
        if (filters.dateRange?.startDate && featureDate < filters.dateRange.startDate) {
          return false;
        }
        
        // Check end date
        if (filters.dateRange?.endDate && featureDate > filters.dateRange.endDate) {
          return false;
        }
        
        return true;
      });
    }

    // Apply contractor role filtering - contractors only see jobs in their neighborhood
    if (userData?.role === 'contractor' && userData.neighborhood) {
      filteredFeatures = filteredFeatures.filter((feature: GeoJSONFeature) => {
        const jobNeighborhood = feature.properties?.neighbhood;
        return jobNeighborhood === userData.neighborhood;
      });
    }

    return filteredFeatures;
  };

  useEffect(() => {
    const filteredFeatures = getFilteredAddpoints();

    // Convert to JobData format
    const jobData: JobData[] = filteredFeatures.map((feature: GeoJSONFeature) => ({
      id: feature.id || feature.properties?.database_id || 'unknown',
      feature,
      serviceType: feature.properties?.['Service_Ty'] || 'Unknown',
      location: feature.properties?.Cross_Stre || feature.properties?.Cross_St || 'Unknown location',
      status: feature.properties?.Status || 'Unclaimed',
      neighborhood: feature.properties?.neighbhood || 'Unknown',
      dateCreated: feature.properties?.created_at ? new Date(feature.properties.created_at).toLocaleDateString() : 'Unknown',
      contractor: feature.properties?.Contractor
    }));

    setJobs(jobData);
  }, [geoJsonData, userData?.neighborhood, filters]);

  if (!isOpen) return null;

  const unclaimedJobs = jobs.filter(job => 
    job.status.toLowerCase() === 'unclaimed' || 
    (!job.status)
  );
  
  const claimedJobs = jobs.filter(job => 
    job.status.toLowerCase() === 'claimed'
  ).filter(job => job.contractor === userData?.email);

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('unclaimed')) {
      return '#dc2626'; // Red
    } else if (statusLower.includes('claimed')) {
      return '#d97706'; // Orange
    } else if (statusLower.includes('completed')) {
      return '#059669'; // Green
    }
    return '#6b7280'; // Gray
  };

  const handleJobClick = (job: JobData) => {
    onJobClick(job.feature);
  };

  return (
    <div className="contractor-job-table-overlay">
      <div className="contractor-job-table">
        <div className="table-header">
          <div className="table-title">
            <FontAwesomeIcon icon={faTable} style={{ marginRight: '8px', color: '#2563eb' }} />
            Job Dashboard - {userData?.neighborhood}
          </div>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="table-tabs">
          <button 
            className={`tab-button ${activeTab === 'unclaimed' ? 'active' : ''}`}
            onClick={() => setActiveTab('unclaimed')}
          >
            Unclaimed Jobs ({unclaimedJobs.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'claimed' ? 'active' : ''}`}
            onClick={() => setActiveTab('claimed')}
          >
            My Claimed Jobs ({claimedJobs.length})
          </button>
        </div>

        <div className="table-content">
          {activeTab === 'unclaimed' && (
            <div className="jobs-list">
              {unclaimedJobs.length === 0 ? (
                <div className="no-jobs">No unclaimed jobs in your neighborhood</div>
              ) : (
                unclaimedJobs.map(job => (
                  <div 
                    key={job.id} 
                    className="job-row"
                    onClick={() => handleJobClick(job)}
                  >
                    <div className="job-main-info">
                      <div className="job-service-type">{job.serviceType}</div>
                      <div className="job-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '4px', fontSize: '12px' }} />
                        {job.location}
                      </div>
                    </div>
                    <div className="job-meta">
                      <div 
                        className="job-status"
                        style={{ color: getStatusColor(job.status) }}
                      >
                        {job.status}
                      </div>
                      <div className="job-date">{job.dateCreated}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'claimed' && (
            <div className="jobs-list">
              {claimedJobs.length === 0 ? (
                <div className="no-jobs">No claimed jobs</div>
              ) : (
                claimedJobs.map(job => (
                  <div 
                    key={job.id} 
                    className="job-row"
                    onClick={() => handleJobClick(job)}
                  >
                    <div className="job-main-info">
                      <div className="job-service-type">{job.serviceType}</div>
                      <div className="job-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '4px', fontSize: '12px' }} />
                        {job.location}
                      </div>
                    </div>
                    <div className="job-meta">
                      <div 
                        className="job-status"
                        style={{ color: getStatusColor(job.status) }}
                      >
                        {job.status}
                      </div>
                      <div className="job-date">{job.dateCreated}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContractorJobTable;
