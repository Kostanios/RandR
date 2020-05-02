import React from 'react';
import { Link } from "react-router-dom";
import Logo from 'components/Svg/Logo';
import { MAP_ROUTE } from 'utils/constants/routeNames';
import styles from './styles.module.scss';

export default ({ showAuthPopup }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.left}>
      </div>
      <div className={styles.center}>
        <Link className={styles.textLink} to="/">Лента</Link>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <Link className={styles.textLink} to={`/${MAP_ROUTE}`}>Карта</Link>
      </div>
      <div className={styles.right}>
        <div onClick={showAuthPopup} className={styles.button}>Войти</div>
      </div>
    </div>
  );
};
