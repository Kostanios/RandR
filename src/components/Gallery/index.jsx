import React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';

const Gallery = ({ children }) => {
  return <div className={styles.Gallery}>{children}</div>;
};

export default Gallery;
