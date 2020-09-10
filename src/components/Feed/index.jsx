import React from 'react';
//import Swiper from 'react-id-swiper';
import styles from './styles.module.scss';
import Gallery from 'components/Gallery';
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
      <Gallery children={children} />
    </div>
  );
};

export default Feed;
