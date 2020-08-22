import React from 'react';

const LogInUser = ({ color, width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 13.3565C15.6566 13.3565 18.6208 10.3666 18.6208 6.67826C18.6208 2.98996 15.6566 0 12.0001 0C8.34358 0 5.37939 2.98996 5.37939 6.67826C5.37939 10.3666 8.34358 13.3565 12.0001 13.3565Z"
        fill={color || '#E9E9EA'}
      />
      <path
        d="M12 11.8956C6.38874 11.8956 1.67702 15.7805 0.364071 21.0292C-0.0379954 22.6366 1.34315 24 3 24H21C22.6569 24 24.038 22.6366 23.6359 21.0292C22.323 15.7805 17.6113 11.8956 12 11.8956Z"
        fill={color || '#E9E9EA'}
      />
    </svg>
  );
};

export default LogInUser;
