import React from 'react';
import { Link } from "react-router-dom";
import HomeSvg from 'components/Svg/HomeIcon';
import DiscountSvg from 'components/Svg/DiscountNav';
import SearchSvg from 'components/Svg/SearchNav';
import FavoriteSvg from 'components/Svg/FavoriteNav';
import ProfileSvg from 'components/Svg/ProfileNav';
import { DISCOUNT_ROUTE, MAP_ROUTE, FAVORITE_ROUTE, PROFILE_ROUTE } from 'utils/constants/routeNames';
import styles from './styles.module.scss';

export default ({ showAuthPopup }) => {
  return (
    <div className={styles.navigation}>
      <Link className={styles.navItem} to="/">
        <HomeSvg />
      </Link>
      <Link className={styles.navItem} to={`/${DISCOUNT_ROUTE}`}>
        <DiscountSvg />
      </Link>
      <Link className={styles.navItem} to={`/${MAP_ROUTE}`}>
        <SearchSvg />
      </Link>
      <Link className={styles.navItem} to={`/${FAVORITE_ROUTE}`}>
        <FavoriteSvg />
      </Link>
      <Link className={styles.navItem} to={`/${PROFILE_ROUTE}`}>
        <ProfileSvg />
      </Link>
    </div>
  );
};
