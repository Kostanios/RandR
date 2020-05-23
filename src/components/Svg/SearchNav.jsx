import React from 'react';

const SearchNav = ({ color, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0668 17.2086C23.5479 12.2929 22.3837 5.48616 17.468 2.00585C12.5523 -1.47445 5.74557 -0.311023 2.26526 4.60548C-1.21504 9.52115 -0.0516162 16.3271 4.86489 19.8074C8.37347 22.2914 13.0122 22.4827 16.7129 20.2972L24.7538 28.2899C25.622 29.2038 27.0665 29.2404 27.9804 28.3722C28.8944 27.5048 28.931 26.0603 28.0636 25.1464C28.0362 25.1172 28.0095 25.0906 27.9804 25.0632L20.0668 17.2086ZM11.1594 17.9537C7.2749 17.9546 4.12558 14.8077 4.12309 10.9233C4.12226 7.03878 7.26908 3.88946 11.1544 3.8878C15.0339 3.88613 18.1815 7.02797 18.189 10.9075C18.1957 14.7928 15.0505 17.9471 11.1644 17.9537C11.1627 17.9537 11.1619 17.9537 11.1594 17.9537Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default SearchNav;