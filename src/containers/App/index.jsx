import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Map from 'containers/Map';
import Home from 'containers/Home';
import Favorite from 'containers/Favorite';
import Navigation from 'components/Navigation';
import Auth from 'containers/Auth';
import { MAP_ROUTE, FAVORITE_ROUTE, AUTH_ROUTE } from 'utils/constants/routeNames';
import styles from './styles.module.scss';
import GlobalWindow from 'containers/GlobalWindow';

function App() {
  const isMobile = useSelector(state => state.app.isMobile);
  const isNavigationVisible = useSelector(state => state.app.isNavigationVisible);
  return (
    <Router>
      <div className={`${styles.wrapper} ${isMobile ? styles['wrapper--mobile'] : ''}`}>
        {isNavigationVisible && <Navigation renderMobile={isMobile} />}
        <div>
          <Switch>
            <Route path={`/${FAVORITE_ROUTE}`}>
              <Favorite />
            </Route>
            <Route path={`/${MAP_ROUTE}`}>
              <Map />
            </Route>
            <Route path={`/${AUTH_ROUTE}`}>
              <Auth />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <GlobalWindow />
      </div>
    </Router>
  );
}

export default App;
