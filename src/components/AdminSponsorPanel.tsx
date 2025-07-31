import React, { useState } from 'react';
import { GeoJSONFeature } from '../services/supabaseService';

interface AdminSponsorPanelProps {
  sponsors: GeoJSONFeature[];
  currentFeaturedId: string | null;
  onSetFeatured: (featureId: string) => Promise<void>;
  loading: boolean;
}

const AdminSponsorPanel: React.FC<AdminSponsorPanelProps> = ({ sponsors, currentFeaturedId, onSetFeatured, loading }) => {
  const [selectedId, setSelectedId] = useState(currentFeaturedId || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(e.target.value);
    setError(null);
  };

  const handleSave = async () => {
    if (!selectedId) return;
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
    <div className="admin-sponsor-panel">
      <h3>Set Featured Sponsor</h3>
      <select value={selectedId} onChange={handleChange} disabled={loading || saving}>
        <option value="">-- Select Sponsor --</option>
        {sponsors.map(s => (
          <option key={s.id || s.properties?.Name} value={s.id || s.properties?.Name}>
            {s.properties?.Name}
          </option>
        ))}
      </select>
      <button onClick={handleSave} disabled={loading || saving || !selectedId} style={{marginLeft: 8}}>
        {saving ? 'Saving...' : 'Set as Featured'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  );
};

export default AdminSponsorPanel;
