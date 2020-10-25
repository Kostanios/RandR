import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SPOTS } from 'api/GQL/queries';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'containers/SearchBar';
import FeedTape from 'components/Feed';
import ShowMoreButton from 'components/ShowMoreButton';
import { SpotPageTrigger } from 'containers/SpotPage';
import { getDataThunk } from 'redux/slices/dataSlice';
import formSpotsCards from 'utils/formSpotsCards/index';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styles from './styles.module.scss';
import Collections from '../Collections';
import Footer from 'containers/Footer';

export default () => {
  // const dispatch = useDispatch();
  // let spotsData = useSelector((state) => state.data.filteredSpotsData);
  // useEffect(() => {
  //   dispatch(getDataThunk());
  //   // eslint-disable-next-line
  // }, []);
  const { data } = useQuery(GET_SPOTS);
  const routeMatch = useRouteMatch();
  const formedCards = formSpotsCards(routeMatch.url, data);
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
