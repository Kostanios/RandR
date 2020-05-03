import React from 'react';
import Swiper from 'react-id-swiper';
import styles from './styles.module.scss';

const Feed = ({ vertical, children, title }) => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div className={styles.feedWrapper}>
      {title && <div className={styles.feedHeading}>{title}</div>}
      <Swiper {...params}>
        {children}
      </Swiper>
    </div>
  );
};

export default Feed
