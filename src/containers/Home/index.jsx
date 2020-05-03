import React from 'react';
import SearchBar from 'containers/SearchBar';
import FeedTape from 'components/Feed';
import EstCard from 'components/Establishment/Card';
import mockCards from 'mocks/cards';
import styles from './styles.module.scss';

export default () => {
  const formedMockCards = mockCards.map((item, index) => (
    <div className={styles.swiperItem} key={item.title + index}>
      <EstCard
        title={item.title}
        withIconsItems={item.withIconsItems}
        withoutIconsItems={item.withoutIconsItems}
      />
    </div>
  ))
  return (
    <div className={styles.homepage}>
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <FeedTape title={'Все рестораны'}>
        {formedMockCards}
      </FeedTape>
    </div>
  );
};
