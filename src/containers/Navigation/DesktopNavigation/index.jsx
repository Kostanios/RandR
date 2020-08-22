import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from 'components/Svg/Logo';
import LogInUser from '../../../components/Svg/LogInUser';
import Reservation from '../../../components/Svg/Reservation';

import { AUTH_ROUTE, RESERVATION_ROUTE } from 'utils/constants/routeNames';
import { ACTIVE_COLOR, DISABLED_COLOR } from '../../../utils/constants/colors';

import {
  left,
  navigation,
  logoContainer,
  textLogo,
  right,
  linkText,
  linkDisabled,
} from './styles.module.scss';

export default () => {
  const isLogined = useSelector((state) => state.auth.isLogined);
  return (
    <div className={navigation}>
      <div className={left}>
        <div className={logoContainer}>
          <Logo />
        </div>
        <Link className={textLogo} to="/">
          RandR
        </Link>
      </div>
      <div className={right}>
        <LogInUser color={isLogined ? DISABLED_COLOR : ACTIVE_COLOR} />
        <Link
          className={isLogined ? linkDisabled : linkText}
          to={`/${AUTH_ROUTE}`}
        >
          Войти
        </Link>
        <Reservation color={isLogined ? ACTIVE_COLOR : DISABLED_COLOR} />
        <Link
          className={isLogined ? linkText : linkDisabled}
          to={`/${RESERVATION_ROUTE}`}
        >
          Брони
        </Link>
      </div>
    </div>
  );
};
