import React from 'react';

const CloseIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        fill={color || "currentColor"}
      />
    </svg>
    
  );
}

export default CloseIcon;
