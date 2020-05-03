import React from 'react';
import styles from './styles.module.scss';

const ItemsLineWithoutIcons = ({ menuItems }) => {
  const formLineItem = (item, index) => {
    const isVisibleDevider = index !== 0;
    return (
      <div key={item.value + index} className={styles.item}>
        {isVisibleDevider && <div className={styles.itemDevider} />}
        <div className={styles.itemText}>{item.value}</div>
      </div>
    )
  }
  const formedLine = menuItems.map((item, index) => formLineItem(item, index));
  return (
    <div className={styles.itemsLineWithoutIcons}>
      {formedLine}
    </div>
  );
};

export default ItemsLineWithoutIcons;
