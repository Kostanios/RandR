import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import OtpInput from 'components/OtpInput';
import { AUTH_ROUTE } from 'utils/constants/routeNames';
import SellInput from 'components/SellInput';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';

export default () => {
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
        <SellInput sellNumber={4} />
        <Link className={styles.a} to={`/${AUTH_ROUTE}`}>
          <ActionButton buttonText="другой телефон" />
        </Link>
      </div>
    </div>
  );
};
