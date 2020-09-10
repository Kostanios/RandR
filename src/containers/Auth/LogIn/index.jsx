import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhone, logInThunk } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';

export default () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);

  const _setPhone = (event) => {
    dispatch(setPhone(event.currentTarget.value));
  };

  const _confirmPhone = () => {
    // TODO: phone validation
    dispatch(logInThunk(String(phoneNumber)));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>Добро пожаловать в Reserve And Relax</p>
      <input
        onChange={_setPhone}
        value={phoneNumber}
        className={styles.input}
        placeholder="Номер телефона"
        type="tel"
      />
      <ActionButton buttonText="Подтвердить" callback={_confirmPhone} />
    </div>
  );
};
