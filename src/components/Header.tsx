import { useState, useEffect } from 'react';
import logo from '../assets/logo_notext.png';
import logoText from '../assets/logo_text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faUser, faPlus, faHardHat, faChartBar } from '@fortawesome/free-solid-svg-icons';
import SearchPanel from "./SearchPanel";
import FilterPanel, { FilterState } from "./FilterPanel";
import LoginPanel from "./LoginPanel";
import AddPointPanel from "./AddPointPanel";
import ClosestContractorPopup from "./ClosestContractorPopup";
import AnalyticsLeftPanel from "./AnalyticsLeftPanel";
import AnalyticsRightPanel from "./AnalyticsRightPanel";
import { useAuth } from '../services/auth-context';
import { GeoJSONFeature } from '../services/supabaseService';

interface HeaderProps {
    onLocationSelect?: (locationData: {
        longitude: number;
        latitude: number;
        zoom: number;
        address: string;
    }) => void;
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    filterPanelOpen: boolean;
    setFilterPanelOpen: (open: boolean) => void;
    isAddingPoint: boolean;
    setIsAddingPoint: (isAdding: boolean) => void;
    addPointCoordinates?: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
    setAddPointCoordinates: (coords: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null } | null) => void;
    onAddPoint?: (point: any) => Promise<void>;
    geoJsonData?: any;
    showContractors?: boolean;
    setShowContractors?: (show: boolean) => void;
    analyticsMode?: boolean;
    setAnalyticsMode?: (mode: boolean) => void;
}


const Header: React.FC<HeaderProps> = ({ 
    onLocationSelect, 
    filters, 
    onFiltersChange, 
    filterPanelOpen, 
    setFilterPanelOpen, 
    isAddingPoint, 
    setIsAddingPoint,
    addPointCoordinates,
    setAddPointCoordinates,
    onAddPoint,
    geoJsonData,
    showContractors,
    setShowContractors,
    analyticsMode,
    setAnalyticsMode
}) => {
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const [analyticsLeftOpen, setAnalyticsLeftOpen] = useState(false);
    const [analyticsRightOpen, setAnalyticsRightOpen] = useState(false);
    const [closestContractorPopup, setClosestContractorPopup] = useState<{
        addedPoint: GeoJSONFeature;
        contractors: GeoJSONFeature[];
    } | null>(null);
    const { user: _user, userData, signOut: _signOut } = useAuth();

    useEffect(() => {
        if (addPointCoordinates) {
            setActivePanel('add-point');
        }
    }, [addPointCoordinates]);

    const togglePanel = (panelType: string) => {
        if (panelType === 'filter') {
            setFilterPanelOpen(!filterPanelOpen);
            setActivePanel(null);
        } else if (panelType === 'add-point') {
            const newIsAddingPoint = !isAddingPoint;
            setIsAddingPoint(newIsAddingPoint);
            // If we are turning off add point mode, also close the panel
            if (!newIsAddingPoint) {
                setActivePanel(null);
            } else {
                setActivePanel('add-point');
            }
            setFilterPanelOpen(false);
        } else if (panelType === 'analytics') {
            const newAnalyticsMode = !analyticsMode;
            if (setAnalyticsMode) {
                setAnalyticsMode(newAnalyticsMode);
            }
            setAnalyticsLeftOpen(newAnalyticsMode);
            setAnalyticsRightOpen(newAnalyticsMode);
            setActivePanel(null);
            setFilterPanelOpen(false);
            setIsAddingPoint(false);
        } else {
            setActivePanel(activePanel === panelType ? null : panelType);
            setFilterPanelOpen(false);
            setIsAddingPoint(false);
        }
    }

    const closePanel = () => {
        setActivePanel(null);
        setFilterPanelOpen(false);
        setIsAddingPoint(false);
        setAddPointCoordinates(null);
    }

    const closeAnalytics = () => {
        setAnalyticsLeftOpen(false);
        setAnalyticsRightOpen(false);
        if (setAnalyticsMode) {
            setAnalyticsMode(false);
        }
    }

    const handleAddPoint = async (point: any) => {
        if (onAddPoint) {
            await onAddPoint(point);
        } else {
            console.log("New point to add:", point);
        }
    };

    const handlePointAdded = (addedPoint: GeoJSONFeature) => {
        // Show closest contractor popup if contractors data is available
        if (geoJsonData?.contractors?.features) {
            setClosestContractorPopup({
                addedPoint,
                contractors: geoJsonData.contractors.features
            });
        }
    };

    const handleLocationSelect = (locationData: { longitude: number; latitude: number; zoom: number; address: string; }) => {
        if (onLocationSelect) {
            onLocationSelect(locationData);
        }
        closePanel();
    };

    return (
        <>
            <header className="app-header">
                <div className="logo-container">
                    <img src={logo} alt="Neighborhood Values Logo" className="app-logo" />
                </div>
                <div className="logo-container">
                    <img src={logoText} alt="Neighborhood Values Logo Text" className="app-logo" />
                </div>
                <div className="button-box">
                    <button className={activePanel === 'search' ? 'active' : ''} onClick={() => togglePanel('search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className={filterPanelOpen ? 'active' : ''} onClick={() => togglePanel('filter')}>
                        <FontAwesomeIcon icon={faFilter} />
                    </button>
                    <button className={activePanel === 'login' ? 'active' : ''} onClick={() => togglePanel('login')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    {(userData?.role === 'user' || userData?.role === 'admin') && (
                        <button className={(activePanel === 'add-point' || isAddingPoint) ? 'active' : ''} onClick={() => togglePanel('add-point')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    )}
                    {userData?.role === 'admin' && (
                        <button 
                            className={showContractors ? 'active' : ''} 
                            onClick={() => {
                                if (setShowContractors) {
                                    setShowContractors(!showContractors);
                                }
                            }}
                            title="Toggle Contractors Layer"
                        >
                            <FontAwesomeIcon icon={faHardHat} />
                        </button>
                    )}
                    {userData?.role === 'admin' && (
                        <button 
                            className={analyticsMode ? 'active' : ''} 
                            onClick={() => togglePanel('analytics')}
                            title="Analytics Dashboard"
                        >
                            <FontAwesomeIcon icon={faChartBar} />
                        </button>
                    )}
                </div>
            </header>

            {activePanel === 'search' && (
                <SearchPanel 
                    onClose={closePanel} 
                    onLocationSelect={handleLocationSelect}
                />
            )}
            {filterPanelOpen && (
                <FilterPanel 
                    onClose={() => setFilterPanelOpen(false)}
                    onFiltersChange={onFiltersChange}
                    initialFilters={filters}
                />
            )}
            {activePanel === 'login' && <LoginPanel onClose={closePanel} />}
            {activePanel === 'add-point' && (
                <AddPointPanel 
                    onClose={closePanel} 
                    onAddPoint={handleAddPoint} 
                    onPointAdded={handlePointAdded}
                    coordinates={addPointCoordinates}
                    onCoordinatesChange={setAddPointCoordinates}
                    setIsAddingPoint={setIsAddingPoint}
                    geoJsonData={geoJsonData}
                />
            )}
            
            {/* Closest Contractor Popup */}
            {closestContractorPopup && (
                <ClosestContractorPopup
                    addedPoint={closestContractorPopup.addedPoint}
                    contractors={closestContractorPopup.contractors}
                    onClose={() => setClosestContractorPopup(null)}
                />
            )}

            {/* Analytics Panels */}
            {analyticsLeftOpen && (
                <AnalyticsLeftPanel onClose={closeAnalytics} geoJsonData={geoJsonData || {}} />
            )}
            {analyticsRightOpen && (
                <AnalyticsRightPanel 
                    onClose={closeAnalytics} 
                    filters={filters}
                    onFiltersChange={onFiltersChange}
                />
            )}
        </>
    );
};

export default Header;