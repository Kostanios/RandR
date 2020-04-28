import React from 'react';
import ActionButtonSmall from 'components/ActionButtonSmall';
import styles from './styles.module.scss';

const EstCard = ({ title, type, address, averagePrice, image }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <img src={image} className={styles.headerImage} alt="card-header" />
        <p className={styles.headerText}>{ title }</p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyItem}>
          <img src="" alt="icon"/>
          <p className={styles.bodyText}>{ type }</p>
        </div>
        <div className={styles.cardBodyItem}>
          <img src="" alt="icon"/>
          <p className={styles.bodyText}>{ address }</p>
        </div>
        <div className={styles.cardBodyItem}>
          <img src="" alt="icon"/>
          <p className={styles.bodyText}>{ averagePrice }</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <ActionButtonSmall buttonText="Забронировать" />
      </div>
    </div>
  );
};

export default EstCard;
