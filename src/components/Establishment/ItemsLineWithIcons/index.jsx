/* eslint-disable no-useless-computed-key */
import React from 'react';
import StarIcon from 'components/Svg/StarIcon';
import PurseIcon from 'components/Svg/PurseIcon';
import LocationIcon from 'components/Svg/LocationIcon';
import styles from './styles.module.scss';

const ItemsLineWithIcons = ({ menuItems }) => {
  const availableIcons = {
    ['PURSE_ICON']: PurseIcon,
    ['LOCATION_ICON']: LocationIcon,
    ['STAR_ICON']: StarIcon
  }
  const formLineItem = (item, index) => {
    const Icon = availableIcons[item.icon]
    return (
      <div key={item.value + index} className={styles.item}>
        <div className={styles.itemIcon}>
          <Icon />
        </div>
        {item.value && <div className={styles.itemText}>{item.value}</div>}
      </div>
    )
  }
  const formedLine = menuItems.map((item, index) => formLineItem(item, index));
  return (
    <div className={styles.itemsLineWithIcons}>
      {formedLine}
    </div>
  );
};

export default ItemsLineWithIcons;
