import React, { useState, useRef } from 'react';

const DELETE = 46;
const BACKSPACE = 8;
const pasword = '111111';

const SellInput = ({ sellNumber }) => {
  const [lastIndex, setLastIndex] = useState(null);
  const confirm = useRef(null);
  const [code, setCode] = useState(new Array(sellNumber).fill(''));

  if (code.join('').length === pasword.length) {
    if (code.join('') !== pasword) {
      confirm.current = false;
      setCode(new Array(sellNumber).fill(''));
      setLastIndex(null);
    } else {
      //dispatch(setProfile)
      document.location.href = '/';
    }
  }

  return (
    <div>
      {code.map((e, i) => {
        return (
          <Sell
            code={code}
            setCode={setCode}
            lastIndex={lastIndex}
            setLastIndex={setLastIndex}
            value={e}
            key={i}
          />
        );
      })}
      {confirm.current === false ? (
        <div> Пароль неправельный </div>
      ) : (
        <div> введите код из смс </div>
      )}
    </div>
  );
};
const Sell = ({
  value,
  code,
  setCode,
  setConfirm,
  lastIndex,
  setLastIndex,
}) => {
  return (
    <input
      value={value || ''}
      onChange={(e) => {
        sellFiller(e.target.value, code, setCode, setConfirm, setLastIndex);
      }}
    />
  );
};

function sellFiller(value, code, setCode, setConfirm, setLastIndex) {
  let codecopy = code;
  let lastSymbolIndex = codecopy.indexOf('');
  if (lastSymbolIndex > -1) {
    codecopy[lastSymbolIndex] = value.split('').splice(-1, 1)[0];
    setCode(codecopy);
    setLastIndex(lastSymbolIndex);
  }
}

export default SellInput;
