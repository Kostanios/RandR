import React from 'react';
import styles from './styles.module.scss';

const RightControl = ({
  getCurrentPositionCallback
}) => {
  return (
    <div className={styles.wrapper} onClick={getCurrentPositionCallback}>
      <div className={styles.roundButton}>
        <img className={styles.icon} src="" alt="point"/>
      </div>
    </div>
  );
}

export default RightControl;
