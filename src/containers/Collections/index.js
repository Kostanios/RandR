import React from 'react';
import Swiper from 'react-id-swiper';

import CollectionCard from '../../components/CollectionCard';
import collections from '../../mocks/collections';

import styles from './styles.module.scss';
import 'swiper/swiper.scss';

const Collections = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
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
