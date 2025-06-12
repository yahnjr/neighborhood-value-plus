import React from 'react';

interface SponsorPopupProps {
  title: string;
  name: string;
  crossStreet: string;
  instagram: string;
  onClose: () => void;
}

const SponsorPopup: React.FC<SponsorPopupProps> = ({ title, name, crossStreet, instagram, onClose }) => {
  return (
    <div className="sponsor-popup">
      <div className="sponsor-popup-header">
        <h2 className="sponsor-popup-header-text">{title}</h2>
        <button onClick={onClose} className="sponsor-popup-close" aria-label="Close">&times;</button>
      </div>
      <div className="sponsor-popup-content">
        <a href={instagram} target="_blank" className="sponsor-popup-link">
          <img
            src="/src/assets/hairconnect.png"
            alt="Sponsor Logo"
            className="sponsor-popup-logo"
          />
        </a>
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
    </div>
  );
};

export default SponsorPopup;
