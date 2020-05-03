import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearGlobalWindowComponent } from 'redux/slices/globalWindowSlice';
import CloseIcon from 'components/Svg/CloseIcon';
import styles from './styles.module.scss';
import './transition.scss';

const GlobalWindowWrapper = () => {
  const components = {}
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
  const [animationClass, setAnimationClass] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('transition-global-window')
    }, 0)
    return () => clearTimeout(timer)
  })
  const dispatch = useDispatch();
  return (
    <div className={`${styles.overlay} ${animationClass}`}>
      <div className={styles.content}>
        <div className={styles.closeIcon} onClick={() => dispatch(clearGlobalWindowComponent())}>
          <CloseIcon />
        </div>
        {children}
      </div>
      <div className={styles.background} onClick={() => dispatch(clearGlobalWindowComponent())}/>
    </div>
  );
};

export default GlobalWindowWrapper;
