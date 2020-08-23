import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentSpot, getSpotByIdThunk } from 'redux/slices/dataSlice';
import {
  setGlobalWindowComponent,
  clearGlobalWindowComponent,
  setGlobalWindowParams,
} from 'redux/slices/globalWindowSlice';
import { COMPONENT_SPOT_PAGE } from 'utils/constants/components';
import config from 'api/config';
import NoPhoto from 'utils/assets/no-photo.png';
import ActionButton from 'components/ActionButton';
import CameraIcon from 'components/Svg/CameraIcon';
import styles from './styles.module.scss';

const SpotPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const currentId = useSelector((state) => state.spots.id);
  const currentSpot = useSelector((state) => state.spots.currentSpot);
  useEffect(() => {
    if (typeof currentId === 'number') {
      getSpotByIdThunk(currentId);
    }
    // eslint-disable-next-line
  }, [currentId, currentSpot]);
  if (!currentSpot) {
    return <SpotPageStub />;
  }
  const headerPhoto =
    currentSpot.photos && currentSpot.photos.length
      ? `${config.baseUrl}${currentSpot.photos[0].url}`
      : NoPhoto;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={headerPhoto}
          className={`${styles.headerImage} ${
            !isImageLoaded ? styles.hideImageForAnimation : ''
          }`}
          alt="spot-header"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className={styles.headerContent}>
          <div className={styles.leftSide}>
            <div className={styles.rating}>{currentSpot.rating}</div>
            <div className={styles.title}>{currentSpot.title}</div>
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
        <div
          className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}
        >
          <div className={styles.contentBlockHeading}>О ресторане</div>
          <div className={styles.contentBlockButton}>
            <ActionButton fullWidth={true} buttonText={'Забронировать стол'} />
          </div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Кухня</div>
          <div className={styles.contentBlockText}>{currentSpot.cuisine}</div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Описание</div>
          <div className={styles.contentBlockText}>
            {currentSpot.description}
          </div>
        </div>
        <div
          className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}
        >
          <div>
            <div className={styles.contentBlockHeading}>Адрес</div>
            <div className={styles.contentBlockText}>{currentSpot.address}</div>
          </div>
          <div className={styles.contentBlockButton}>
            <ActionButton fullWidth={true} buttonText={'Показать на карте'} />
          </div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockHeading}>Режим работы</div>
          <div className={styles.contentBlockText}>
            Пн-Вс: {currentSpot.time}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpotPageStub = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSide}>
          <div className={`${styles.rating} ${styles.stub}`} />
          <div className={`${styles.title} ${styles.stub}`} />
        </div>
        <div className={styles.rightSide}>
          <div className={`${styles.morePhotos} ${styles.stub}`} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div
        className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}
      >
        <div className={`${styles.contentBlockHeading} ${styles.stub}`} />
        <div className={`${styles.contentBlockButton} ${styles.stub}`} />
      </div>
      <div className={styles.contentBlock}>
        <div className={`${styles.contentBlockHeading} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
      </div>
      <div className={styles.contentBlock}>
        <div className={`${styles.contentBlockHeading} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
      </div>
      <div
        className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}
      >
        <div className={styles.stubsBlock}>
          <div className={`${styles.contentBlockHeading} ${styles.stub}`} />
          <div className={`${styles.contentBlockText} ${styles.stub}`} />
        </div>
        <div className={`${styles.contentBlockButton} ${styles.stub}`} />
      </div>
      <div className={styles.contentBlock}>
        <div className={`${styles.contentBlockHeading} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
        <div className={`${styles.contentBlockText} ${styles.stub}`} />
      </div>
    </div>
  </div>
);

export const SpotPageTrigger = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  useEffect(() => {
    dispatch(setCurrentSpot({ id: +spotId }));
    dispatch(setGlobalWindowParams({ navigateBeforeClose: '/' }));
    dispatch(setGlobalWindowComponent({ name: COMPONENT_SPOT_PAGE }));
    return () => {
      dispatch(setCurrentSpot({ id: undefined }));
      dispatch(clearGlobalWindowComponent());
    };
  });
  return <div></div>;
};

export default SpotPage;
