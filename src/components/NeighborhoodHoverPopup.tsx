import React from 'react';

interface NeighborhoodHoverPopupProps {
  neighborhoodName: string;
  pointCount: number;
  x: number; 
  y: number; 
}

const NeighborhoodHoverPopup: React.FC<NeighborhoodHoverPopupProps> = ({
  neighborhoodName,
  pointCount,
  x,
  y
}) => {
  return (
    <div
      className="neighborhood-hover-popup"
      style={{
        left: x + 1,
        top: y + 1
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