import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import ConfirmOtp from './ConfirmOtp';
import { COMPONENT_CONFIRM_OTP, COMPONENTS_LOG_IN } from 'utils/constants/components';
import styles from './styles.module.scss';

const Auth = () => {
  // const isLogined = useSelector(state => state.user.isLogined);
  // useEffect(() => {
  //   if (isLogined) {
  //     navigation.navigate(routeNames.HOME);
  //   }
  // });
  const components = {
    [COMPONENTS_LOG_IN]: LogIn,
    [COMPONENT_CONFIRM_OTP]: ConfirmOtp
  }
  const curComponentName = useSelector(state => state.auth.currentComponent);
  const Component = components[curComponentName || COMPONENTS_LOG_IN];

  return (
    <div className={styles.wrapper}>
      <Component />
    </div>
  );
};

export default Auth;
