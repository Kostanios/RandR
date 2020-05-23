import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActionButtonSmall from 'components/ActionButtonSmall';
import ItemsLineWithIcons from 'components/Establishment/ItemsLineWithIcons';
import ItemsLineWithoutIcons from 'components/Establishment/ItemsLineWithoutIcons';
import styles from './styles.module.scss';

const EstCardStub = () => {
  return (
    <div className={`${styles.cardWrapper} ${styles.stub}`}>
      <div className={`${styles.cardHeader} ${styles.stub}`} />
      <div className={`${styles.cardBody}`}>
        <div className={`${styles.cardHeading} ${styles.stub}`} />
        <div className={`${styles.itemsLineWrapper} ${styles.stub}`} />
        <div className={`${styles.itemsLineWrapper} ${styles.stub}`} />
      </div>
    </div>
  );
};

const EstCard = ({
  stub,
  title,
  linkTo,
  photo,
  withIconsItems,
  withoutIconsItems,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  if (stub) {
    return <EstCardStub />;
  }
  return (
    <Link to={linkTo}>
      <div className={styles.cardWrapper}>
        <div
          className={`${styles.cardHeader} ${
            !isImageLoaded ? styles.hideImageForAnimation : ''
          }`}
        >
          <img
            src={photo}
            className={styles.headerImage}
            alt="card-header"
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardHeading}>{title}</div>
          <div className={styles.itemsLineWrapperWithIcons}>
            <ItemsLineWithIcons menuItems={withIconsItems} />
          </div>
          <div className={styles.itemsLineWrapper}>
            <ItemsLineWithoutIcons menuItems={withoutIconsItems} />
          </div>
          <div className={styles.cardActionButton}>
            <ActionButtonSmall buttonText="Забронировать" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EstCard;
