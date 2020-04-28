import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from 'containers/Search';
import Favorite from 'containers/Favorite'
import styles from './styles.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Search />
        <Switch>
          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
