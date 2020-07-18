import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBottomSheetPosition } from 'redux/slices/bottomSheetSlice';
import {
  COMPONENT_MAP_BOTTOM_SHEET,
  COMPONENT_SPOT_PAGE,
} from 'utils/constants/components';
import MapBottomSheet from 'containers/MapBottomSheet';
import SpotPage from 'containers/SpotPage';
import styles from './styles.module.scss';

const BottomSheetWrapper = ({ componentName }) => {
  const components = {
    [COMPONENT_MAP_BOTTOM_SHEET]: MapBottomSheet,
    [COMPONENT_SPOT_PAGE]: SpotPage,
  };
  const componentConfig = useSelector((state) => state.bottomSheet.component);
  const isMobile = useSelector((state) => state.app.isMobile);
  const name = componentConfig?.name || componentName;
  if (!isMobile || !name) {
    return <div style={{ position: 'absolute' }}></div>;
  }
  const Component = components[name];
  return (
    <BottomSheet key={name}>
      <Component />
    </BottomSheet>
  );
};

const BottomSheet = ({ children }) => {
  const [navigationAngle, setNavigationAngle] = useState('0deg');
  const [overlayTranslate, setOverlayTranslate] = useState(650);
  const [isTocuhMoved, setIsTouchMoved] = useState(false);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const currentPosition = useSelector((state) => state.bottomSheet.position);
  const setPosition = (position) => {
    if (position >= 0 && position <= 2) {
      dispatch(setBottomSheetPosition(position));
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentPosition === 0) {
      setOverlayTranslate(window.innerHeight * 0.6 - 65);
    } else if (currentPosition === 1) {
      setOverlayTranslate(window.innerHeight * 0.3 - 65);
    } else if (currentPosition === 2) {
      setOverlayTranslate(0);
    }
  }, [currentPosition]);
  const handleTouchStart = (event) => {
    setTouchStartPosition(event.changedTouches[0].clientY);
  };
  const handleTouchMove = (event) => {
    const changedTouchPosition = event.changedTouches[0].clientY;
    if (changedTouchPosition + 20 < touchStartPosition) {
      setNavigationAngle('-30deg');
      setIsTouchMoved(true);
    } else if (changedTouchPosition - 20 > touchStartPosition) {
      setNavigationAngle('30deg');
      setIsTouchMoved(true);
    } else {
      setNavigationAngle('0deg');
    }
  };
  const handleTouchEnd = (event) => {
    const changedTouchPosition = event.changedTouches[0].clientY;
    if (!isTocuhMoved) {
      if (currentPosition === 2) {
        setPosition(0);
      } else {
        setPosition(2);
      }
    } else if (changedTouchPosition + 20 < touchStartPosition) {
      setPosition(currentPosition + 1);
    } else if (changedTouchPosition - 20 > touchStartPosition) {
      setPosition(currentPosition - 1);
    }
    setNavigationAngle('0deg');
    setIsTouchMoved(false);
  };
  return (
    <div className={styles.overlayRelative}>
      <div
        className={styles.overlay}
        style={{ '--translate': overlayTranslate + 'px' }}
      >
        <div
          className={styles.positionControllerWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.positionController}
            style={{ '--rotate-angle': navigationAngle }}
          >
            <span className={styles.positionControllerButton} />
            <span
              className={`${styles.positionControllerButton} ${styles.positionControllerButtonRight}`}
            />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default BottomSheetWrapper;
