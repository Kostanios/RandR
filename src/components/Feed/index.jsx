import React from 'react';
import Swiper from 'react-id-swiper';
import styles from './styles.module.scss';

const getSliderParams = (vertical = false) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  if (vertical) {
    params.direction = 'vertical';
  }
  return params;
};

const Feed = ({ vertical, children, title }) => {
  const params = getSliderParams(vertical);
  return (
    <div className={styles.feedWrapper}>
      {title && <div className={styles.feedHeading}>{title}</div>}
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

export default Feed;
