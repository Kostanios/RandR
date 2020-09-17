import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './default.scss';

import { RERESTRATION_ROUTE, CONFIRM_ROUTE } from 'utils/constants/routeNames';
import { setPhone } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';
import './styles.module.scss';
import { ReactTelephoneInput } from 'react-telephone-input';

export default () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);

  const _setPhone = (value) => {
    dispatch(setPhone(value));
  };

  const _confirmPhone = () => {
    alert('валидация');
    // TODO: phone validation
    // dispatch(logInThunk(String(phoneNumber)));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>Reserve And Relax</p>
      <ReactTelephoneInput
        preferredCountries={['by', 'ru', 'ua']}
        defaultCountry="by"
        value={phoneNumber}
        flagsImagePath="flags.png"
        onChange={_setPhone}
      />
      <input
        type="password"
        className={styles.input}
        placeholder={'введите пароль'}
      />
      <Link className={styles.actionButton} to={`/${CONFIRM_ROUTE}`}>
        <ActionButton buttonText="Подтвердить" callback={_confirmPhone} />
      </Link>
      <div className={styles.regestrationContainer}>
        <p className={styles.regestrationText}>не зарегестрированы? </p>
        <Link className={styles.regestrationLink} to={`/${RERESTRATION_ROUTE}`}>
          {' '}
          Регестрация RandR{' '}
        </Link>
      </div>
    </div>
  );
};
