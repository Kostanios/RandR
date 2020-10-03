import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import Swiper from 'react-id-swiper';

const Slider = ({ images }) => {
  const params = {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  };
  return (
    <Swiper {...params}>
      <ImageComponents images={images} />
    </Swiper>
  );
};

const ImageComponents = ({ images }) => {
  return images.map((url) => {
    return (
      <div key={url} className="swiper-slide">
        <div className={styles.cardContainer}>
          <img src={url} className={styles.headerImage} alt="spot-header" />
        </div>
      </div>
    );
  });
};

export default Slider;
