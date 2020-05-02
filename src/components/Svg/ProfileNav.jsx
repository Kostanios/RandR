import React from 'react';

const ProfileNav = ({ color, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M16.0002 16.6957C20.6105 16.6957 24.348 12.9582 24.348 8.34786C24.348 3.73748 20.6105 3.05176e-05 16.0002 3.05176e-05C11.3898 3.05176e-05 7.65234 3.73748 7.65234 8.34786C7.65234 12.9582 11.3898 16.6957 16.0002 16.6957Z"
        fill={color || "currentColor"}
      />
      <path 
        d="M16.0001 14.8696C7.64375 14.8696 0.869629 21.6437 0.869629 30H31.1305C31.1305 21.6437 24.3564 14.8696 16.0001 14.8696Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default ProfileNav;
