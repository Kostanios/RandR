import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { confirmOtpThunk } from 'redux/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';

const DELETE = 46;
const BACKSPACE = 8;
const pasword = '1111';
const SellInput = ({ sellNumber }) => {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  const dispatch = useDispatch();

  const confirm = useRef(null);
  const [code, setCode] = useState(new Array(sellNumber).fill(''));
  const lastIndex = useRef(0);
  const [otp, setOtp] = useState('');

  async function _confirmOtp() {
    dispatch(confirmOtpThunk(Number(otp)));
  }

  async function answerCheck() {
    _confirmOtp();
  }
  // useLayoutEffect(() => {
  //   if (auth.isLogined) history.push('/');
  // });
  useEffect(() => {
    if (code.join('').length === 4) {
      lastIndex.current = 0;
      setCode(new Array(sellNumber).fill(''));
      answerCheck();
    }
  });

  return (
    <div className={styles.sellInputConatiner}>
      <div className={styles.sellInput}>
        {code.map((e, i) => {
          return (
            <Sell
              setOtp={setOtp}
              code={code}
              setCode={setCode}
              focusOrNot={lastIndex.current === i}
              lastIndex={lastIndex}
              value={e}
              key={i}
            />
          );
        })}
      </div>
      {confirm.current === false ? (
        <p className={styles.alert}> Пароль неправельный </p>
      ) : (
        <p className={styles.message}> введите код из смс </p>
      )}
    </div>
  );
};
const Sell = ({ setOtp, value, code, setCode, focusOrNot, lastIndex }) => {
  return (
    <input
      autoFocus={true}
      className={focusOrNot ? styles.focusedSell : styles.sell}
      value={value || ''}
      onChange={(e) => {
        sellFiller(e.target.value, code, setCode, lastIndex, setOtp);
      }}
    />
  );
};

function sellFiller(value, code, setCode, lastIndex, setOtp) {
  let codecopy = code;
  codecopy[lastIndex.current] = value.split('').splice(-1, 1)[0];
  lastIndex.current = lastIndex.current + 1;
  setCode(codecopy);
  setOtp(codecopy.join(''));
}

export default SellInput;
