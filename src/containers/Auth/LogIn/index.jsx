import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './default.scss';

import { AUTH_ROUTE, CONFIRM_ROUTE } from 'utils/constants/routeNames';
import { setPhone } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';
import './styles.module.scss';
import { ReactTelephoneInput } from 'react-telephone-input';

export default () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);

  const _setPhone = (event) => {};

  const _confirmPhone = () => {
    // TODO: phone validation
    // dispatch(logInThunk(String(phoneNumber)));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>Добро пожаловать в Reserve And Relax</p>
      <ReactTelephoneInput
        preferredCountries={['by', 'ru', 'ua']}
        defaultCountry="by"
        value={phoneNumber}
        className={styles.input}
        flagsImagePath="flags.png"
        onChange={_setPhone}
      />
      <Link to={`/${CONFIRM_ROUTE}`}>
        <ActionButton buttonText="Подтвердить" callback={_confirmPhone} />
      </Link>
    </div>
  );
};
