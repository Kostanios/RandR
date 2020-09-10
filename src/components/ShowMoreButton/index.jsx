import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { setGaleryComponentLimit } from 'redux/slices/globalWindowSlice';
const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const spotsData = useSelector((state) => state.data.spotsData);
  const { galeryComponentLimit } = useSelector((state) => state.globalWindow);

  if (galeryComponentLimit >= spotsData.length) {
    return <div></div>;
  }
  return (
    <button
      className={styles.showMoreButton}
      type="button"
      onClick={(e) => {
        dispatch(
          setGaleryComponentLimit({
            galeryComponentLimit: galeryComponentLimit + 4,
          })
        );
      }}
    >
      показать ещё
    </button>
  );
};

export default ShowMoreButton;
