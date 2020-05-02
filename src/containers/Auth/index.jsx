import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import ConfirmOtp from './ConfirmOtp';
import { COMPONENT_CONFIRM_OTP, COMPONENT_LOG_IN } from 'utils/constants/components';

const Auth = () => {
  const components = {
    [COMPONENT_LOG_IN]: LogIn,
    [COMPONENT_CONFIRM_OTP]: ConfirmOtp
  }
  const curComponentName = useSelector(state => state.auth.currentComponent);
  const Component = components[curComponentName || COMPONENT_LOG_IN];

  return (
    <Component />
  );
};

export default Auth;
