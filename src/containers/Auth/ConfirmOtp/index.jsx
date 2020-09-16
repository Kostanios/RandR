import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//import OtpInput from 'components/OtpInput';
import SellInput from 'components/SellInput';
import ActionButton from 'components/ActionButton';
import { confirmOtpThunk } from 'redux/slices/authSlice';
import styles from './styles.module.scss';

export default () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');

  const _confirmOtp = () => {
    dispatch(confirmOtpThunk(otp));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>
        Введите код для подтверждения вашего номера телефона
      </p>
      {/* <OtpInput
        onChange={(otp) => setOtp(otp)}
        isInputNum={true}
        numInputs={4}
      /> */}
      <SellInput sellNumber={6} />
      <ActionButton buttonText="другой телефон" />
    </div>
  );
};
