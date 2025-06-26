import React, { useState } from 'react';

interface SponsorPopupProps {
  title: string;
  name: string;
  crossStreet: string;
  instagram: string;
  logoUrl?: string | null;
  onClose: () => void;
  isAdmin?: boolean;
  sponsors?: any[];
  currentFeaturedId?: string | null;
  onSetFeatured?: (featureId: string) => Promise<void>;
  loading?: boolean;
}

const SponsorPopup: React.FC<SponsorPopupProps> = ({
  title,
  name,
  crossStreet,
  instagram,
  logoUrl,
  onClose,
  isAdmin = false,
  sponsors = [],
  currentFeaturedId = null,
  onSetFeatured,
  loading = false
}) => {
  const [selectedId, setSelectedId] = useState(currentFeaturedId || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(e.target.value);
    setError(null);
  };

  const handleSave = async () => {
    if (!selectedId || !onSetFeatured) return;
    setSaving(true);
    setError(null);
    try {
      await onSetFeatured(selectedId);
    } catch (err: any) {
      setError('Failed to update featured sponsor.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="sponsor-popup" style={{ maxWidth: 320, minWidth: 0, width: '100%' }}>
      <div className="sponsor-popup-header">
        <h2 className="sponsor-popup-header-text">{title}</h2>
        <button onClick={onClose} className="sponsor-popup-close" aria-label="Close">&times;</button>
      </div>
      <div className="sponsor-popup-content">
        {logoUrl && (
          <a href={instagram} target="_blank" className="sponsor-popup-link" rel="noopener noreferrer">
            <img
              src={logoUrl}
              alt="Sponsor Logo"
              className="sponsor-popup-logo"
            />
          </a>
        )}
        <div className="sponsor-popup-info">
          <h3 className="sponsor-popup-title">{name}</h3>
          <p className="sponsor-popup-location">{crossStreet}</p>
        </div>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-popup-instagram"
        >
        </a>
      </div>
        {isAdmin && sponsors.length > 0 && (
          <div style={{ marginTop: 32, width: '100%', maxWidth: '300px', padding: '10px' }}>
            <hr style={{ border: 'none', borderTop: '1.5px solid #e5e7eb', margin: '18px 0 16px 0' }} />
            <label htmlFor="featured-sponsor-select" style={{ fontWeight: 600, color: '#324f4f', fontSize: 14, marginBottom: 6, display: 'block' }}>Set Featured Sponsor</label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <select
                id="featured-sponsor-select"
                value={selectedId}
                onChange={handleChange}
                disabled={loading || saving}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 6,
                  fontSize: 15,
                  background: '#f9fafb',
                  color: '#324f4f',
                  outline: 'none',
                  minWidth: 0
                }}
              >
                <option value="">-- Select Sponsor --</option>
                {sponsors.map(s => (
                  <option key={s.properties?.OBJECTID?.toString() || s.properties?.Name} value={s.properties?.OBJECTID?.toString() || s.properties?.Name}>
                    {s.properties?.Name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSave}
                disabled={loading || saving || !selectedId}
                style={{
                  background: '#324f4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 16px',
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: loading || saving || !selectedId ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                  minWidth: 100
                }}
              >
                {saving ? 'Saving...' : 'Set Featured'}
              </button>
            </div>
            {error && <div style={{ color: 'red', marginTop: 8, fontSize: 13 }}>{error}</div>}
          </div>
        )}
    </div>
  );
};

export default SponsorPopup;
