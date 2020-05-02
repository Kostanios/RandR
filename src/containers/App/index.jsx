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
import { MAP_ROUTE, FAVORITE_ROUTE } from 'utils/constants/routeNames';
import styles from './styles.module.scss';
import GlobalWindow from 'containers/GlobalWindow';

function App() {
  const isMobile = useSelector(state => state.app.isMobile);
  const isNavigationVisible = useSelector(state => state.app.isNavigationVisible);
  return (
    <Router>
      <div className={`${styles.wrapper} ${isMobile ? styles['wrapper--mobile'] : ''}`}>
        {isNavigationVisible && <Navigation renderMobile={isMobile} />}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path={`/${FAVORITE_ROUTE}`}>
            <Favorite />
          </Route>
          <Route path={`/${MAP_ROUTE}`}>
            <Map />
          </Route>
        </Switch>
        <GlobalWindow />
      </div>
    </Router>
  );
}

export default App;
