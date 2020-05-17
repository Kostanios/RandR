import React from 'react';
import SearchBar from 'containers/SearchBar';
import FeedTape from 'components/Feed';
import EstCard from 'components/Establishment/Card';
import { SpotPageTrigger } from 'containers/SpotPage';
import mockCards from 'mocks/cards';
import styles from './styles.module.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export default () => {
  const routeMatch = useRouteMatch();
  const formedMockCards = mockCards.map((item) => (
    <div className={styles.swiperItem} key={item.title + item.uid}>
      <EstCard
        title={item.title}
        linkTo={`${routeMatch.url}${item.uid}`}
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
      <Switch>
        <Route path={`${routeMatch.path}:spotUid`} component={SpotPageTrigger} />
      </Switch>
    </div>
  );
};
