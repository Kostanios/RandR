import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

const DELETE = 46;
const BACKSPACE = 8;
const pasword = '111111';

const SellInput = ({ _confirmOtp, setOtp, sellNumber }) => {
  _confirmOtp();
  const confirm = useRef(null);
  const [code, setCode] = useState(new Array(sellNumber).fill(''));
  const [lastIndex, setLastIndex] = useState(0);

  if (code.join('').length === pasword.length) {
    if (code.join('') !== pasword) {
      confirm.current = false;
      setCode(new Array(sellNumber).fill(''));
      setLastIndex(0);
    } else {
      //dispatch(setProfile)
      document.location.href = '/';
    }
  }

  return (
    <div className={styles.sellInputConatiner}>
      <div className={styles.sellInput}>
        {code.map((e, i) => {
          return (
            <Sell
              setOtp={setOtp}
              code={code}
              setCode={setCode}
              focusOrNot={lastIndex === i}
              setLastIndex={setLastIndex}
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
const Sell = ({
  setOtp,
  value,
  code,
  setCode,
  focusOrNot,
  lastIndex,
  setLastIndex,
}) => {
  return (
    <input
      autoFocus="true"
      className={focusOrNot ? styles.focusedSell : styles.sell}
      value={value || ''}
      onChange={(e) => {
        sellFiller(
          e.target.value,
          code,
          setCode,
          lastIndex,
          setLastIndex,
          setOtp
        );
      }}
    />
  );
};

function sellFiller(value, code, setCode, lastIndex, setLastIndex, setOtp) {
  let codecopy = code;
  codecopy[lastIndex] = value.split('').splice(-1, 1)[0];
  setCode(codecopy);
  setOtp(codecopy.join(''));
  setLastIndex(lastIndex + 1);
}

export default SellInput;
