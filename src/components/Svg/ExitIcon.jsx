import React from 'react';

const ExitIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || "26"}
      height={height || "26"}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2917 18.8801H18.3219V22.9404C18.3219 24.6196 16.9558 25.9855 15.2766 25.9855H3.04509C1.36613 25.9855 0 24.6196 0 22.9404V3.04509C0 1.36613 1.36613 0 3.04509 0H15.2766C16.9558 0 18.3219 1.36613 18.3219 3.04509V7.10541H16.2917V3.04509C16.2917 2.4855 15.8364 2.03006 15.2766 2.03006H3.04509C2.4855 2.03006 2.03006 2.4855 2.03006 3.04509V22.9404C2.03006 23.5 2.4855 23.9555 3.04509 23.9555H15.2766C15.8364 23.9555 16.2917 23.5 16.2917 22.9404V18.8801ZM21.2149 8.20752L19.7793 9.64308L22.1138 11.9778H8.98332V14.0079H22.1138L19.7793 16.3424L21.2149 17.778L26 12.9929L21.2149 8.20752Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default ExitIcon;