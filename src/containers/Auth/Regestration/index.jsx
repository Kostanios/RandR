import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { ReactTelephoneInput } from 'react-telephone-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './default.scss';
import { setPhone } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import { CONFIRM_ROUTE } from 'utils/constants/routeNames';

const Regestration = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const password = useRef('');
  const [confirmState, setConfirmState] = useState(false);

  const passwordOnChangeHandler = (e) => {
    password.current = e.target.value;
  };
  const repeatPasswordOnChangeHandler = (e) => {
    if (password.current === e.target.value) {
      setConfirmState(true);
    }
  };
  const RepeatPasswordOnBlurHandler = (e) => {
    let target = e.target;
    if (target.value !== password.current) {
      target.className = styles.alertInput;
      target.placeholder = 'пароли не совпадают';
      e.target.value = '';
    }
  };
  const PasswordOnBlurHandler = (e) => {
    let target = e.target;
    if (target.value.length < 4 || target.value.length >= 12) {
      target.className = styles.alertInput;
      e.target.value = '';
      target.placeholder = 'пароль должен быть от 4 до 12';
    }
  };
  const _setPhone = (value) => {
    dispatch(setPhone(value));
  };
  const _confirmPhone = () => {
    alert('валидация');
    // TODO: phone validation
    // dispatch(logInThunk(String(phoneNumber)));
  };

  const ReadyToConfirmButton = () => {
    return (
      <Link className={styles.actionButton} to={`/${CONFIRM_ROUTE}`}>
        <ActionButton buttonText="Подтвердить" callback={_confirmPhone} />
      </Link>
    );
  };
  const FakeButton = () => {
    return (
      <Link>
        <ActionButton disabled={true} buttonText="Подтвердить" />
      </Link>
    );
  };
  return (
    <div className={styles.regestrationContainer}>
      <div className={styles.regestrationWindow}>
        <h1 className={styles.welcomeToRandR}>
          {' '}
          Добро пожаловать в Reverse And Relax
        </h1>
        <p className={styles.regestrationHeader}>
          для регестрации укажите свой настоящий номер мобильного телефона и
          придумайте надёжный пароль
        </p>
        <ReactTelephoneInput
          preferredCountries={['by', 'ru', 'ua']}
          defaultCountry="by"
          value={phoneNumber}
          flagsImagePath="flags.png"
          onChange={_setPhone}
        />
        <input
          autocomplete="off"
          type="password"
          className={styles.input}
          placeholder={'введите пароль'}
          onChange={passwordOnChangeHandler}
          onBlur={PasswordOnBlurHandler}
        />
        <input
          autocomplete="off"
          type="password"
          className={styles.input}
          placeholder={'подтвердите пароль'}
          onBlur={RepeatPasswordOnBlurHandler}
          onChange={repeatPasswordOnChangeHandler}
        />
        {confirmState ? <ReadyToConfirmButton /> : <FakeButton />}
      </div>
    </div>
  );
};

export default Regestration;
