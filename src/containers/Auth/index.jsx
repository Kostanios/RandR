import React from 'react';
import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './LogIn';
import Verification from './ConfirmOtp';
import Registration from './Registration';
import { REGISTRATION_ROUTE, VERIFICATION_ROUTE } from 'utils/constants/routeNames';
import styles from './styles.module.scss';

const Auth = () => {
  const routeMatch = useRouteMatch();
  return (
    <div className={styles.authWrapper}>
      <Switch>
        <Route path={`${routeMatch.path}/${VERIFICATION_ROUTE}`}>
          <Verification />
        </Route>
        <Route path={`${routeMatch.path}/${REGISTRATION_ROUTE}`}>
          <Registration />
        </Route>
        <Route path={routeMatch.path}>
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
