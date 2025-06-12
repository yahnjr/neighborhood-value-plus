import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';

interface SearchResultProperties {
    category?: string;
}

interface SearchResult {
    id: string;
    text: string;
    place_name: string;
    center: [number, number];
    properties?: SearchResultProperties;
}

interface SearchPanelProps {
    onClose: () => void;
    onLocationSelect?: (location: {
        longitude: number;
        latitude: number;
        zoom: number;
        address: string;
    }) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onClose, onLocationSelect }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Debounced search function
    useEffect(() => {
        if (searchQuery.trim().length < 3) {
            setSearchResults([]);
            return;
        }

        // Clear previous timeout
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        // Set new timeout for debounced search
        searchTimeoutRef.current = setTimeout(() => {
            searchAddresses(searchQuery);
        }, 300);

        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, [searchQuery]);

    const searchAddresses = async (query: string): Promise<void> => {
        if (!query.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
            
            // Geocoding API endpoint with bias towards Portland area
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
                `access_token=${mapboxToken}&` +
                `proximity=-122.5715,45.498&` + 
                `bbox=-122.8,45.4,-122.3,45.6&` + 
                `limit=5&` +
                `types=address,poi,place&` +
                `country=US`
            );

            if (!response.ok) {
                throw new Error('Search request failed');
            }

            const data = await response.json();
            setSearchResults(data.features || []);
        } catch (err) {
            console.error('Geocoding error:', err);
            setError('Failed to search addresses. Please try again.');
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResultClick = (result: SearchResult): void => {
        const [longitude, latitude] = result.center;
        
        // Call parent callback to update map view
        if (onLocationSelect) {
            onLocationSelect({
                longitude,
                latitude,
                zoom: 16,
                address: result.place_name
            });
        }

        // Close the search panel
        onClose();
    };

    const handleClearSearch = (): void => {
        setSearchQuery('');
        setSearchResults([]);
        setError(null);
    };

    return (
        <div className="header-panel search-panel">
            <div className="panel-header">
                <h3>Search Addresses</h3>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="panel-content">
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for a place or address..." 
                            className="search-input"
                            autoFocus
                        />
                        {searchQuery && (
                            <button 
                                className="clear-search-btn"
                                onClick={handleClearSearch}
                                aria-label="Clear search"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                        {isLoading && (
                            <div className="search-loading">
                                <FontAwesomeIcon icon={faSpinner} spin />
                            </div>
                        )}
                    </div>
                </div>

                {error && (
                    <div className="search-error">
                        {error}
                    </div>
                )}

                <div className="search-results">
                    {searchResults.length > 0 && (
                        <div className="results-header">
                            <span>Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</span>
                        </div>
                    )}
                    
                    {searchResults.map((result, index) => (
                        <div 
                            key={`${result.id}-${index}`}
                            className="search-result-item"
                            onClick={() => handleResultClick(result)}
                        >
                            <div className="result-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="result-content">
                                <div className="result-name">
                                    {result.text}
                                </div>
                                <div className="result-address">
                                    {result.place_name}
                                </div>
                                {result.properties?.category && (
                                    <div className="result-category">
                                        {result.properties.category}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {searchQuery.trim().length >= 3 && searchResults.length === 0 && !isLoading && !error && (
                        <div className="no-results">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>No results found for "{searchQuery}"</p>
                            <p className="no-results-hint">Try searching for a street address, business name, or landmark</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;