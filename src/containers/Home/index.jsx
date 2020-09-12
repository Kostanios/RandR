import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'containers/SearchBar';
import FeedTape from 'components/Feed';
import ShowMoreButton from 'components/ShowMoreButton';
import { SpotPageTrigger } from 'containers/SpotPage';
import { getDataThunk } from 'redux/slices/dataSlice';
import formSpotsCards from 'utils/formSpotsCards/index';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { CacheSwitch } from 'react-router-cache-route/index';
import styles from './styles.module.scss';
import Collections from '../Collections';
import Footer from 'containers/Footer';

export default () => {
  const dispatch = useDispatch();
  const spotsData = useSelector((state) => state.data.spotsData);
  useEffect(() => {
    dispatch(getDataThunk());
    // eslint-disable-next-line
  }, []);
  const routeMatch = useRouteMatch();
  const formedCards = formSpotsCards(routeMatch.url, spotsData);
  return (
    <div className={styles.homepage}>
      <Collections />
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <FeedTape title="Все рестораны">{formedCards}</FeedTape>
      <Switch>
        <Route path={`${routeMatch.path}:spotId`} component={SpotPageTrigger} />
      </Switch>
      <ShowMoreButton />
      <Footer />
    </div>
  );
};
