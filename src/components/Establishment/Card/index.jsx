import React from 'react';
import { Link } from 'react-router-dom';
import ActionButtonSmall from 'components/ActionButtonSmall';
import ItemsLineWithIcons from 'components/Establishment/ItemsLineWithIcons';
import ItemsLineWithoutIcons from 'components/Establishment/ItemsLineWithoutIcons';
import mockPhoto from 'mocks/GanBei.png';
import styles from './styles.module.scss';

const EstCard = ({ title, linkTo, withIconsItems, withoutIconsItems }) => {
  return (
    <Link to={linkTo}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <img src={mockPhoto} className={styles.headerImage} alt="card-header" />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardHeading}>{title}</div>
          <div className={styles.itemsLineWrapperWithIcons}>
            <ItemsLineWithIcons menuItems={withIconsItems}/>
          </div>
          <div className={styles.itemsLineWrapper}>
            <ItemsLineWithoutIcons menuItems={withoutIconsItems}/>
          </div>
          <div className={styles.cardActionButton}>
            <ActionButtonSmall
              buttonText="Забронировать"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EstCard;
