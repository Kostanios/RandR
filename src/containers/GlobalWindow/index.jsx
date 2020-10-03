import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearGlobalWindowComponent } from 'redux/slices/globalWindowSlice';
import {
  COMPONENT_SPOT_PAGE,
  COMPONENT_LOG_IN,
  USER_PROFILE,
} from 'utils/constants/components';
import CloseIcon from 'components/Svg/CloseIcon';
import SpotPage from 'containers/SpotPage';
import LogIn from 'containers/Auth/LogIn';
import UserProfile from 'containers/UserProfile';
import styles from './styles.module.scss';
import './transition.scss';

const ESC_EVENT_KEY_CODE = 27;

const GlobalWindowWrapper = () => {
  const components = {
    [COMPONENT_SPOT_PAGE]: SpotPage,
    [COMPONENT_LOG_IN]: LogIn,
    [USER_PROFILE]: UserProfile,
  };
  const componentConfig = useSelector((state) => state.globalWindow.component);
  const isModalOpen = componentConfig && componentConfig.name;
  if (!isModalOpen) return <div style={{ position: 'absolute' }}></div>;
  const Component = components[componentConfig.name] || null;
  return (
    <GlobalWindow key={componentConfig.name}>
      <Component />
    </GlobalWindow>
  );
};

const GlobalWindow = ({ children }) => {
  const history = useHistory();
  const [overlayAnimationClass, setOverlayAnimationClass] = useState('');
  const [contentAnimationClass, setContentAnimationClass] = useState('');
  const modalView = useSelector((state) => state.globalWindow.modalView);
  const navigateBeforeClose = useSelector(
    (state) => state.globalWindow.navigateBeforeClose
  );
  const closeWindow = () => {
    setOverlayAnimationClass('transition-global-window-out');
    setContentAnimationClass('left-side-menu-transition-out');
    setTimeout(() => {
      if (navigateBeforeClose) {
        history.replace(navigateBeforeClose);
      }
      dispatch(clearGlobalWindowComponent());
    }, 150);
  };
  useEffect(() => {
    const escListener = (event) => {
      if (event.keyCode === ESC_EVENT_KEY_CODE) {
        closeWindow();
      }
    };
    document.addEventListener('keydown', escListener, false);
    const timerIn = setTimeout(() => {
      setOverlayAnimationClass('transition-global-window-in');
      setContentAnimationClass('left-side-menu-transition-in');
    }, 0);
    return () => {
      document.removeEventListener('keydown', escListener, false);
      clearTimeout(timerIn);
    };
    // eslint-disable-next-line
  }, []);
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.overlay} ${
        modalView ? styles.overlayModalView : ''
      } ${overlayAnimationClass}`}
    >
      <div
        className={`${styles.content} ${
          modalView ? styles.contentModalView : styles.contentLeftSide
        } ${contentAnimationClass}`}
      >
        <div className={styles.closeIcon} onClick={closeWindow}>
          <CloseIcon />
        </div>
        {children}
      </div>
      <div className={styles.background} onClick={closeWindow} />
    </div>
  );
};

export default GlobalWindowWrapper;
