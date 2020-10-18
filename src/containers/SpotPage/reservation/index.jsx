import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import Calendar from 'components/Svg/Calendar';

export const Reservation = ({ currentSpot }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dateTable}>
        <div className={styles.restaurantName}>{currentSpot.name}</div>
        <DateTable currentSpot={currentSpot} />
      </div>
      <div className={styles.userInfo}></div>
    </div>
  );
};

const DateTable = ({ currentSpot }) => {
  const [choosedTime, chooseTime] = useState(null);
  const [choosedDate, chooseDate] = useState(new Date());
  const [personNumber, setPersonNumber] = useState(1);
  function addPerson() {
    setPersonNumber(() => personNumber + 1);
  }
  function removePerson() {
    if (personNumber > 1) setPersonNumber(() => personNumber - 1);
  }
  return (
    <div className={styles.tableContent}>
      <div className={styles.containerDatePersons}>
        <div className={styles.setDateContainer}>
          <Calendar />
          <span>
            {choosedDate.getDate() +
              ' ' +
              choosedDate.getMonth() +
              ' ' +
              choosedDate.getFullYear()}
          </span>
        </div>
        <div className={styles.changePersonContainer}>
          <span className={styles.changePersonButton} onClick={removePerson}>
            -
          </span>
          <span className={styles.personNumber}>{`${personNumber} чел.`}</span>
          <span className={styles.changePersonButton} onClick={addPerson}>
            +
          </span>
        </div>
      </div>
      <TimeSells chooseTime={chooseTime} currentSpot={currentSpot} />
    </div>
  );
};

const TimeSells = ({ currentSpot, chooseTime }) => {
  const choosedSellIndex = useRef(null);
  return currentSpot.timetable[2] ? (
    <div className={styles.timeTable}>
      {currentSpot.timetable[2].map((time, sellIndex) => {
        if (choosedSellIndex.current === sellIndex) {
          return <div className={styles.timeSellChoosed}> {time} </div>;
        } else {
          return (
            <div
              onClick={() => {
                choosedSellIndex.current = sellIndex;
                chooseTime(time);
              }}
              className={styles.timeSell}
            >
              {time}
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div></div>
  );
};
