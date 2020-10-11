import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactTelephoneInput } from 'react-telephone-input';

import { RERESTRATION_ROUTE, CONFIRM_ROUTE } from 'utils/constants/routeNames';
import { setPhone } from 'redux/slices/authSlice';
import { requestOtpThunk } from 'redux/slices/authSlice';
import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';
import './styles.module.scss';
import './default.scss';
import SendCodeIcon from 'components/Svg/SendCodeIcon';
import SellInput from 'components/SellInput';

export default () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.auth.phone);
  const [codeInputVision, setCodeInputVision] = useState(false);
  const _setPhone = (value) => {
    dispatch(setPhone(value.replace(/\(|\)|\-/g, '')));
  };

  const codeRequestButtonHandler = () => {
    _phoneRequest();
    setCodeInputVision(true);
  };
  const _phoneRequest = () => {
    dispatch(requestOtpThunk(phoneNumber));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.textHeading}>Reserve And Relax</p>
      <div className={styles.telephoneInput}>
        <ReactTelephoneInput
          preferredCountries={['by', 'ru', 'ua']}
          defaultCountry="by"
          flagsImagePath="flags.png"
          onChange={_setPhone}
          //onBlur={()=>{alert()}}
        />
        <div
          className={styles.codeRequestButton}
          onClick={codeRequestButtonHandler}
        >
          <SendCodeIcon />
        </div>
      </div>

      {/* <SellInput sellNumber={4} /> */}
      {codeInputVision ? <SellInput sellNumber={4} /> : <div></div>}
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
