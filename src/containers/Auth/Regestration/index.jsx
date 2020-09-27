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
  const name = useRef('');
  const [confirmState, setConfirmState] = useState(false);

  const nameOnChangeHandler = (e) => {
    name.current = e.target.value;
  };

  const NameOnBlurHandler = (e) => {
    let target = e.target;
    if (target.value.length < 4 || target.value.length >= 12) {
      target.className = styles.alertInput;
      e.target.value = '';
      target.placeholder = 'имя должно быть от 4 до 12';
    } else {
      setConfirmState(true);
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
          type="text"
          className={styles.input}
          placeholder={'введите имя'}
          onChange={nameOnChangeHandler}
          onBlur={NameOnBlurHandler}
        />
        {confirmState ? <ReadyToConfirmButton /> : <FakeButton />}
      </div>
    </div>
  );
};

export default Regestration;
