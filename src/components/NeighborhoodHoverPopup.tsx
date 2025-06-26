import React from 'react';

interface NeighborhoodHoverPopupProps {
  neighborhoodName: string;
  pointCount: number;
}

const NeighborhoodHoverPopup: React.FC<NeighborhoodHoverPopupProps> = ({
  neighborhoodName,
  pointCount
}) => {
  return (
    <div
      className="neighborhood-hover-popup"
      style={{
        position: 'fixed',
        top: 134,
        left: 24,
        zIndex: 1001,
        pointerEvents: 'none',
        maxWidth: 320
      }}
    >
      <div className="neighborhood-hover-popup-row">
        <span className="neighborhood-hover-popup-name">{neighborhoodName}</span>
        <span className="neighborhood-hover-popup-dot">•</span>
        <span className="neighborhood-hover-popup-count">
          {pointCount} {pointCount === 1 ? 'service' : 'services'}
        </span>
      </div>
    </div>
  );
};

export default NeighborhoodHoverPopup;