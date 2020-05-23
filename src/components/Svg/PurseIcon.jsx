import React from 'react';

const PurseIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || "10"}
      height={height || "10"}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91014 5.0198C7.26397 5.0198 6.73827 5.5455 6.73827 6.19167C6.73827 6.83784 7.26397 7.36355 7.91014 7.36355H9.57029C9.57692 7.36355 9.58338 7.36288 9.58992 7.36255C9.59641 7.36286 9.60279 7.36353 9.60936 7.36353C9.8251 7.36353 9.99998 7.18864 9.99998 6.9729V3.9065C9.99998 3.38646 9.74438 2.92523 9.35242 2.64107L8.02352 0.461C7.96934 0.372094 7.8819 0.3085 7.78061 0.284359C7.67932 0.26018 7.5726 0.277465 7.48411 0.332348L6.50409 0.940081L6.06214 0.192152C6.00899 0.102231 5.92208 0.037348 5.82077 0.0119575C5.71948 -0.0134331 5.6122 0.00283637 5.52296 0.057055L1.75994 2.344H1.17187C0.959744 2.344 0.786561 2.17404 0.781366 1.96315C0.786561 1.75225 0.959744 1.58229 1.17187 1.58229H1.89453C2.11027 1.58229 2.28515 1.4074 2.28515 1.19166C2.28515 0.97592 2.11027 0.801038 1.89453 0.801038H1.17187C0.619178 0.801038 0.154668 1.18569 0.0318359 1.70133C0.0114062 1.74871 0 1.80086 0 1.85572V1.95338V1.97291V8.43774C0 9.2993 0.700936 10.0002 1.5625 10.0002H8.43748C9.11112 10.0002 9.70688 9.57112 9.91992 8.93245C9.9882 8.7278 9.87764 8.50655 9.67299 8.43829C9.46836 8.37003 9.24709 8.48057 9.17883 8.68522C9.07233 9.00448 8.77442 9.21899 8.43748 9.21899H1.5625C1.13172 9.21899 0.781249 8.86852 0.781249 8.43774V3.05824C0.903494 3.1016 1.03496 3.12525 1.17187 3.12525H8.43748C8.86826 3.12525 9.21873 3.47572 9.21873 3.9065V5.0198H7.91014ZM9.21873 6.58228H7.91014C7.69475 6.5823 7.51952 6.40706 7.51952 6.19165C7.51952 5.97626 7.69475 5.80103 7.91014 5.80103H9.21873V6.58228ZM3.26421 2.34402L5.59075 0.9301L6.00671 1.63402C6.0147 1.65326 6.02388 1.67223 6.0352 1.69051C6.0437 1.7042 6.05311 1.71695 6.06294 1.72922L6.42622 2.34402H3.26421ZM7.33368 2.344L6.90163 1.61283L7.56131 1.20375L8.25639 2.344H7.33368Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default PurseIcon;