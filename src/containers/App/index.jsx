import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { setUserLocation, pinThunk } from 'redux/slices/appSlice';
import { authThunk } from 'redux/slices/authSlice';
import Map from 'containers/Map';
import Home from 'containers/Home';
import Favorite from 'containers/Favorite';
import Navigation from 'containers/Navigation';
import Footer from 'containers/Footer';
import Auth from 'containers/Auth';
import {
  MAP_ROUTE,
  FAVORITE_ROUTE,
  AUTH_ROUTE,
} from 'utils/constants/routeNames';
import GlobalWindow from 'containers/GlobalWindow';
import socket from 'api/socket';
import styles from './styles.module.scss';

// TODO: data fetching faster, then user location.

function App() {
  socket();
  const dispatch = useDispatch();
  function getGeolocation() {
    function successCallback(positionObj) {
      dispatch(
        setUserLocation({
          latitude: positionObj.coords.latitude,
          longitude: positionObj.coords.longitude,
        })
      );
      console.log(positionObj);
    }
    function errorCallback() {
      console.warn('geoposition disabled');
    }
    const options = {
      enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }
  useEffect(() => {
    getGeolocation();
    dispatch(pinThunk());
    dispatch(authThunk());
  });
  const isMobile = useSelector((state) => state.app.isMobile);
  const isNavigationVisible = useSelector(
    (state) => state.app.isNavigationVisible
  );
  return (
    <Router>
      <div
        className={`${styles.wrapper} ${
          isMobile ? styles['wrapper--mobile'] : ''
        }`}
      >
        {isNavigationVisible && <Navigation renderMobile={isMobile} />}
        <CacheSwitch className={styles.wrapperInner}>
          <Route path={`/${FAVORITE_ROUTE}`} component={Favorite} />
          <CacheRoute path={`/${MAP_ROUTE}`} when="always" component={Map} />
          <Route path={`/${AUTH_ROUTE}`} component={Auth} />
          <Route path="/" component={Home} />
        </CacheSwitch>
        <GlobalWindow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
