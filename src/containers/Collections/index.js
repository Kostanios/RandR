import React from 'react';
import Swiper from 'react-id-swiper';

import CollectionCard from '../../components/CollectionCard';
import collections from '../../mocks/collections';

import styles from './styles.module.scss';
import 'swiper/swiper.scss';

const Collections = () => {
  const cardsCollection = collections.map((item) => {
    const { selection, image } = item;
    return (
      <CollectionCard key={selection} selection={selection} image={image} />
    );
  });
  return (
    <>
      <h2 className={styles.title}>Подборки</h2>
      <div className={styles.container}>
        <Swiper>{cardsCollection}</Swiper>
      </div>
    </>
  );
};

export default Collections;
