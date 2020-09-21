import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//import OtpInput from 'components/OtpInput';
import { AUTH_ROUTE } from 'utils/constants/routeNames';
import SellInput from 'components/SellInput';
import ActionButton from 'components/ActionButton';
import { confirmOtpThunk } from 'redux/slices/authSlice';
import styles from './styles.module.scss';

export default () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const _confirmOtp = () => {
    dispatch(confirmOtpThunk(phoneNumber, otp));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.textHeading}>
          Введите код для подтверждения вашего номера телефона
        </p>
        {/* <OtpInput
          onChange={(otp) => setOtp(otp)}
          isInputNum={true}
          numInputs={4}
        /> */}
        <SellInput _confirmOtp={_confirmOtp} setOtp={setOtp} sellNumber={6} />
        <Link className={styles.a} to={`/${AUTH_ROUTE}`}>
          <ActionButton buttonText="другой телефон" />
        </Link>
      </div>
    </div>
  );
};
