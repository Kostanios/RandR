import { useEffect, useState } from 'react';

export default (ref, parentRef) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        parentRef &&
        !parentRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
      if (parentRef.current && parentRef.current.contains(event.target)) {
        setIsVisible(!isVisible);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, parentRef, isVisible]);
  return { isVisible };
};
