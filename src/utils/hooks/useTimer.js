import { useState, useEffect } from 'react';
export default () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(seconds => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return {
    timer,
    setTimer
  };
};
