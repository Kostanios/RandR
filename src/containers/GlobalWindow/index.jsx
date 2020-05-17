import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearGlobalWindowComponent } from 'redux/slices/globalWindowSlice';
import { COMPONENT_SPOT_PAGE } from 'utils/constants/components';
import CloseIcon from 'components/Svg/CloseIcon';
import SpotPage from 'containers/SpotPage';
import styles from './styles.module.scss';
import './transition.scss';

const GlobalWindowWrapper = () => {
  const components = {
    [COMPONENT_SPOT_PAGE]: SpotPage
  }
  const componentConfig = useSelector(state => state.globalWindow.component);
  const isModalOpen = componentConfig && componentConfig.name;
  if (!isModalOpen) return (<div></div>)
  const Component = components[componentConfig.name] || null;
  return (
    <GlobalWindow key={componentConfig.name}>
      <Component />
    </GlobalWindow>
  )
}

const GlobalWindow = ({ children }) => {
  const history = useHistory();
  const [overlayAnimationClass, setOverlayAnimationClass] = useState('');
  const [contentAnimationClass, setContentAnimationClass] = useState('');
  const modalView = useSelector(state => state.globalWindow.modalView);
  const navigateBeforeClose = useSelector(state => state.globalWindow.navigateBeforeClose);
  const onCloseWindow = () => {
    setOverlayAnimationClass('transition-global-window-out');
    setContentAnimationClass('left-side-menu-transition-out');
    setTimeout(() => {
      if (navigateBeforeClose) {
        history.replace(navigateBeforeClose);
      }
      dispatch(clearGlobalWindowComponent())
    }, 150)
  }
  useEffect(() => {
    const timerIn = setTimeout(() => {
      setOverlayAnimationClass('transition-global-window-in');
      setContentAnimationClass('left-side-menu-transition-in');
    }, 0)
    return () => {
      clearTimeout(timerIn);
    }
  }, [])
  const dispatch = useDispatch();
  return (
    <div className={`${styles.overlay} ${modalView ? styles.overlayModalView : ''} ${overlayAnimationClass}`}>
      <div className={`${styles.content} ${modalView ? styles.contentModalView : styles.contentLeftSide} ${contentAnimationClass}`}>
        <div className={styles.closeIcon} onClick={onCloseWindow}>
          <CloseIcon />
        </div>
        {children}
      </div>
      <div className={styles.background} onClick={onCloseWindow}/>
    </div>
  );
};

export default GlobalWindowWrapper;
