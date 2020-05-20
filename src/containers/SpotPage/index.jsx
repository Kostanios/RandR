import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentSpot } from 'redux/slices/spotSlice';
import { setGlobalWindowComponent, clearGlobalWindowComponent, setGlobalWindowParams } from 'redux/slices/globalWindowSlice';
import { COMPONENT_SPOT_PAGE } from 'utils/constants/components';
import ActionButton from 'components/ActionButton';
import CameraIcon from 'components/Svg/CameraIcon';
import mockSpots from 'mocks/spots';
import mockPhoto from 'mocks/ganBeiHQ.jpg';
import styles from './styles.module.scss';

const SpotPage = () => {
  const componentUid = useSelector(state => state.spot.uid);
  const componentConfig = mockSpots.find(spot => spot.uid === componentUid);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={mockPhoto} className={styles.headerImage} alt="spot-header" />
        <div className={styles.headerContent}>
          <div className={styles.leftSide}>
            <div className={styles.rating}>
              {componentConfig.rating}
            </div>
            <div className={styles.title}>
              {componentConfig.title}
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.morePhotos}>
              <CameraIcon />
              <div className={styles.photosAmount}>15</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}>
          <div className={styles.contentBlockHeading}>О ресторане</div>
          <div className={styles.contentBlockButton}>
            <ActionButton fullWidth={true} buttonText={"Забронировать стол"} />
          </div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Кухня</div>
          <div className={styles.contentBlockText}>{componentConfig.cuisine}</div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Описание</div>
          <div className={styles.contentBlockText}>{componentConfig.full_description}</div>
        </div>
        <div className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}>
          <div>
            <div className={styles.contentBlockHeading}>Адрес</div>
            <div className={styles.contentBlockText}>{componentConfig.address}</div>
          </div>
          <div className={styles.contentBlockButton}>
            <ActionButton fullWidth={true} buttonText={"Показать на карте"} />
          </div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Режим работы</div>
          <div className={styles.contentBlockText}>Пн-Вс: {componentConfig.time}</div>
        </div>
      </div>
    </div>
  );
};

export const SpotPageTrigger = () => {
  const dispatch = useDispatch();
  const { spotUid } = useParams();
  useEffect(() => {
    dispatch(setCurrentSpot({ uid: +spotUid }));
    dispatch(setGlobalWindowParams({ navigateBeforeClose: '/' }));
    dispatch(setGlobalWindowComponent({ name: COMPONENT_SPOT_PAGE }));
    return () => {
      dispatch(setCurrentSpot({ uid: null }));
      dispatch(clearGlobalWindowComponent());
    }
  })
  return (<div></div>)
}

export default SpotPage;
