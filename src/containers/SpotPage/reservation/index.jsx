import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionButton from 'components/ActionButton';
import styles from './styles.module.scss';
import Calendar from 'components/Svg/Calendar';

export const Reservation = ({ currentSpot }) => {
  const auth = useSelector((state) => state.auth);
  const [choosedTime, chooseTime] = useState(null);
  const [choosedDate, chooseDate] = useState(new Date());
  const [personNumber, setPersonNumber] = useState(1);
  const [phone, setPhone] = useState(auth.phone);
  const [userName, setUserName] = useState(auth.profile.name);
  const [userComment, setUserComment] = useState();
  const [warning, warningTrigger] = useState(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (warning === false || warning === undefined) {
      if (choosedTime === null) {
        setMessage('вы забыли выбрать время');
      } else if (!phone) {
        setMessage('вы забыли указать телефон');
      } else if (phone.replace(/(\+375)|(\+7)/).length < 7) {
        setMessage('телефон указан неверно');
      } else if (!userName) {
        setMessage('вы забыли указать своё имя');
      } else {
        setMessage('');
        warningTrigger(true);
      }
    }
  }, [warning]);
  return (
    <div className={styles.container}>
      <div className={styles.dateTable}>
        <DateTable
          choosedTime={choosedTime}
          chooseTime={chooseTime}
          choosedDate={choosedDate}
          chooseDate={chooseDate}
          personNumber={personNumber}
          setPersonNumber={setPersonNumber}
          currentSpot={currentSpot}
        />
      </div>
      <div className={styles.userInfo}>
        <UserContent
          message={message}
          warning={warning}
          warningTrigger={warningTrigger}
          phone={phone}
          setPhone={setPhone}
          userName={userName}
          setUserName={setUserName}
          userComment={userComment}
          setUserComment={setUserComment}
        />
      </div>
    </div>
  );
};

const DateTable = ({
  currentSpot,
  choosedTime,
  chooseTime,
  choosedDate,
  chooseDate,
  personNumber,
  setPersonNumber,
}) => {
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
      <TimeSells
        chooseTime={chooseTime}
        currentSpot={currentSpot}
        choosedDate={choosedDate}
      />
    </div>
  );
};

const TimeSells = ({ currentSpot, chooseTime, choosedDate }) => {
  const currentDate = new Date();
  const choosedSellIndex = useRef(null);
  return currentSpot.timetable[2] ? (
    <div className={styles.timeTable}>
      {currentSpot.timetable[2].map((time, sellIndex) => {
        if (
          choosedDate.getDate() === currentDate.getDate() &&
          currentDate.getHours() * 60 + currentDate.getMinutes()
        ) {
        }
        if (choosedSellIndex.current === sellIndex) {
          return <div className={styles.timeSellChoosed}> {time} </div>;
        } else {
          return (
            <div
              key={sellIndex}
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

const UserContent = ({
  phone,
  setPhone,
  userName,
  setUserName,
  userComment,
  setUserComment,
  warning,
  warningTrigger,
  message,
}) => {
  return (
    <div className={styles.UserContentContainer}>
      <div className={styles.userFooter}>
        <input
          placeholder="введите имя"
          value={userName || ''}
          className={styles.userContent}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          placeholder="введите телефон"
          value={phone || ''}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className={styles.userContent}
        />
      </div>
      <textarea
        placeholder="оставьте ваше пожелание"
        wrap="hard"
        className={styles.userComent}
        value={userComment || ''}
        onChange={(e) => {
          setUserComment(e.target.value);
        }}
      />
      <p className={styles.advice}>{message}</p>
      <ActionButton
        buttonText="забронировать"
        callback={() => {
          if (warning) {
            //reservation request
          } else {
            warningTrigger(warning === undefined ? false : undefined);
          }
        }}
      />
    </div>
  );
};
