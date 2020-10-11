import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from 'components/Svg/Logo';
import LogInUser from '../../../components/Svg/LogInUser';
import Reservation from '../../../components/Svg/Reservation';
import {
  setGlobalWindowComponent,
  setGlobalWindowParams,
} from 'redux/slices/globalWindowSlice';
import {
  AUTH_ROUTE,
  RESERVATION_ROUTE,
  USER_ROUTE,
} from 'utils/constants/routeNames';
import { ACTIVE_COLOR, DISABLED_COLOR } from '../../../utils/constants/colors';
import {
  COMPONENT_SPOT_PAGE,
  COMPONENT_LOG_IN,
  USER_PROFILE,
} from 'utils/constants/components';

import {
  left,
  navigation,
  logoContainer,
  textLogo,
  right,
  linkText,
  linkDisabled,
  profileLink,
} from './styles.module.scss';

export default () => {
  const dispatch = useDispatch();
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
        {isLogined ? (
          <div
            onClick={() => {
              dispatch(
                setGlobalWindowParams({
                  navigateBeforeClose: '/',
                  modalView: false,
                })
              );
              dispatch(setGlobalWindowComponent({ name: USER_PROFILE }));
            }}
            className={profileLink}
          >
            <LogInUser color={ACTIVE_COLOR} />
          </div>
        ) : (
          <div
            className={linkText}
            onClick={() => {
              dispatch(
                setGlobalWindowParams({
                  navigateBeforeClose: '/',
                  modalView: true,
                })
              );
              dispatch(
                setGlobalWindowComponent({
                  name: COMPONENT_LOG_IN,
                })
              );
            }}
          >
            Войти
          </div>
        )}
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
{
  /* <Link to={`/${AUTH_ROUTE}`}>
            Войти
          </Link> */
}
