import { useEffect, useState } from 'react';

export default () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onError = error => {
    setError(error.message);
  };

  const onChange = ({ coords }) => {
    setPosition(coords);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return { location: position, error };
};
