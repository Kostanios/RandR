import React from 'react';

const Filters = ({ color, width, height }) => (
  <svg
    width={width || '20'}
    height={height || '14'}
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="1" width="20" height="3" rx="1.5" fill={color || '#191919'} />
    <rect y="10" width="20" height="3" rx="1.5" fill={color || '#191919'} />
    <circle cx="14.5" cy="2.5" r="2.5" fill={color || '#191919'} />
    <circle cx="5.5" cy="11.5" r="2.5" fill={color || '#191919'} />
  </svg>
);

export default Filters;
