import React from 'react';
import Swiper from 'react-id-swiper';

import CollectionCard from '../../components/CollectionCard';
import collections from '../../mocks/collections';

import styles from './styles.module.scss';

const Collections = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      850: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  };

  const cardsCollection = collections.map((item) => {
    const { selection, image } = item;
    return (
      <CollectionCard key={selection} selection={selection} image={image} />
    );
  });
  return (
    <>
      <h2 className={styles.title}>Подборки</h2>
      <Swiper {...params}>{cardsCollection}</Swiper>
    </>
  );
};

export default Collections;
