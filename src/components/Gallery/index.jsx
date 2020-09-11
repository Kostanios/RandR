import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Gallery = ({ children }) => {
  const { galeryComponentLimit } = useSelector((state) => state.globalWindow);
  return (
    <div className={styles.Gallery}>
      {children.slice(0, galeryComponentLimit)}
    </div>
  );
};

export default Gallery;
