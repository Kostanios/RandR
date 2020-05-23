import React from 'react';

const Logo = ({ color, width, height }) => {
  return (
    <svg
      width={width || "64"}
      height={height || "64"}
      viewBox="0 0 303 303"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M51.4341 93.5683C51.4341 93.5683 61.5816 90.1883 67.2191 102.582C72.8566 114.975 77.3666 133.002 81.3128 139.762C85.2591 146.522 93.7153 150.465 93.7153 150.465C93.7153 150.465 63.5547 149.958 53.6891 177.505C45.2328 201.165 75.6753 218.065 108.937 213.558C108.937 213.558 84.6953 206.235 89.7691 178.632C95.5757 146.972 123.03 152.155 123.03 152.155C123.03 152.155 120.775 148.212 118.52 141.452C116.265 134.692 112.319 113.285 106.682 104.835C101.721 97.399 88.6416 78.3583 51.4341 93.5683Z"
        fill={color || "currentColor"}
      />
      <path 
        d="M251.566 212.488C251.566 212.488 241.418 215.868 235.781 203.475C230.143 191.081 225.633 173.055 221.687 166.295C217.74 159.535 209.284 155.591 209.284 155.591C209.284 155.591 239.445 156.098 249.311 128.551C257.767 104.891 227.324 87.9913 194.063 92.498C194.063 92.498 218.304 99.8213 213.23 127.425C207.424 159.084 179.969 153.901 179.969 153.901C179.969 153.901 182.224 157.845 184.479 164.605C186.734 171.365 190.68 192.771 196.318 201.221C201.279 208.657 214.358 227.698 251.566 212.488Z"
        fill={color || "currentColor"}
      />
      <path 
        d="M126.131 91.5967C126.131 91.5967 135.715 91.5967 135.715 103.427C135.715 115.257 134.023 211.587 134.023 211.587H180.251C180.251 211.587 168.976 211.023 168.976 198.067C168.976 185.11 169.54 91.5967 169.54 91.5967H126.131Z"
        fill={color || "currentColor"}
      />
      <path 
        d="M151.5 294.678C230.738 294.678 294.974 230.49 294.974 151.31C294.974 72.1298 230.738 7.94165 151.5 7.94165C72.261 7.94165 8.02539 72.1298 8.02539 151.31C8.02539 230.49 72.261 294.678 151.5 294.678Z"
        stroke={color || "currentColor"}
        strokeWidth="15"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default Logo;