import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentSpot, getSpotByIdThunk } from 'redux/slices/dataSlice';
import {
  setGlobalWindowComponent,
  clearGlobalWindowComponent,
  setGlobalWindowParams,
} from 'redux/slices/globalWindowSlice';
import { COMPONENT_SPOT_PAGE } from 'utils/constants/components';
import { RUdays } from 'utils/constants/RUdays';
import config from 'api/config';
import StarIcon from '../../components/Svg/StarIcon';
import { info, reviews } from './const/const';
import NoPhoto from 'utils/assets/no-photo.png';
import ActionButton from 'components/ActionButton';
import ChooseLine from './chooseLIne/index';
import styles from './styles.module.scss';
import Slider from './slider/index';

const SpotPage = () => {
  const [page, setPage] = useState(info);
  const currentId = useSelector((state) => state.data.id);
  const currentSpot = useSelector((state) => state.data.currentSpot);
  useEffect(() => {
    if (typeof currentId === 'number') {
      getSpotByIdThunk(currentId);
    }
    // eslint-disable-next-line
  }, [currentId, currentSpot]);
  if (!currentSpot) {
    return <SpotPageStub />;
  }
  console.log(currentSpot);
  // const headerPhoto =
  //   currentSpot.images && currentSpot.images.length
  //     ? currentSpot.images[0]
  //     : NoPhoto;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Slider images={currentSpot.images} />
        <div className={styles.headerContent}>
          <div className={styles.leftSide}>
            <div className={styles.rating}>
              <StarIcon />
              <div>{currentSpot.rating.overall}</div>
            </div>
            <div className={styles.title}>{currentSpot.name}</div>
          </div>
        </div>
      </div>
      <div className={styles.chooseLine}>
        <div className={styles.pageLinkContainer}>
          <ChooseLine page={page} setPage={setPage} />
        </div>
        <div className={styles.actionButtonContainer}>
          <ActionButton fullWidth buttonText="Забронировать стол" />
        </div>
      </div>
      {page === info ? (
        <InfoComponent currentSpot={currentSpot} />
      ) : page === reviews ? (
        <div>отзывы</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const WorkingHoursObject = ({ obj }) => {
  const schedule = useMemo(() => sortWorkingHours(obj), [obj]);
  const scheduleComponents = schedule.map((component) => {
    return (
      <div className={styles.scheduleComponent} key={Math.random()}>
        <div className={styles.scheduleDays}> {component.weekDays} </div>
        <div className={styles.scheduleWorkingHours}> {component.time} </div>
      </div>
    );
  });
  return <div className={styles.scheduleContainer}>{scheduleComponents}</div>;
};

const sortWorkingHours = (obj) => {
  const days = Object.keys(obj);
  const schedule = days.reduce((p, c, i, a) => {
    if (p.length === 0) {
      p.push({
        weekDays: c,
        time: obj[c].time,
      });
      return p;
    } else if (p[p.length - 1].time !== obj[c].time) {
      p.push({
        weekDays: c,
        time: obj[c].time,
      });
      return p;
    } else {
      p[p.length - 1].weekDays = p[p.length - 1].weekDays.replace(
        /-[A-z]*/g,
        ''
      );
      p[p.length - 1].weekDays = p[p.length - 1].weekDays + `-${c}`;
      return p;
    }
  }, []);
  return schedule.map((e) => {
    e.weekDays = e.weekDays
      .replace(/monday/g, RUdays[0])
      .replace(/tuesday/g, RUdays[1])
      .replace(/wednesday/g, RUdays[2])
      .replace(/thursday/g, RUdays[3])
      .replace(/friday/g, RUdays[4])
      .replace(/saturday/g, RUdays[5])
      .replace(/sunday/g, RUdays[6]);
    return e;
  });
};

const InfoComponent = ({ currentSpot }) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentBlock}>
        <div className={styles.contentBlockHeading}>Кухня</div>
        <div className={styles.contentBlockText}>{currentSpot.cuisine}</div>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.contentBlockHeading}>Описание</div>
        <div className={styles.contentBlockText}>{currentSpot.description}</div>
      </div>
      <div
        className={`${styles.contentBlock} ${styles.contentBlockHorizontal}`}
      >
        <div>
          <div className={styles.contentBlockHeading}>Адрес</div>
          <div className={styles.contentBlockText}>
            {currentSpot.geo.address}
          </div>
        </div>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.contentBlockHeading}>Режим работы</div>
        <div className={styles.contentBlockText}>
          {<WorkingHoursObject obj={currentSpot.workingHours} />}
        </div>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.contentBlockHeading}>
          Дополнительная Информация
        </div>
        <div className={styles.contentBlockText}>{}</div>
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
  console.log('spotId-' + spotId);
  useEffect(() => {
    dispatch(setCurrentSpot({ id: spotId }));
    dispatch(setGlobalWindowParams({ navigateBeforeClose: '/' }));
    dispatch(setGlobalWindowComponent({ name: COMPONENT_SPOT_PAGE }));
    return () => {
      dispatch(clearGlobalWindowComponent());
    };
  });
  return <div />;
};

export default SpotPage;
