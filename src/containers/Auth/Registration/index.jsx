import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber, logInThunk } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';

export default () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(state => state.auth.phoneNumber);

  const _setPhoneNubmer = (event) => {
    console.log(event);
    dispatch(setPhoneNumber(event.currentTarget.value));
  };

  const _confirmPhoneNumber = () => {
    dispatch(logInThunk());
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>Добро пожаловать в Reserve And Relax</p>
      <input
        onChange={_setPhoneNubmer}
        value={phoneNumber}
        placeholder="Номер телефона"
        type="tel"
      />
      <ActionButton
        buttonText="Подтвердить"
        callback={_confirmPhoneNumber}
      />
    </div>
  );
};
