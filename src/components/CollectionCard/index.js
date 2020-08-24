import React from 'react';

import styles from 'components/CollectionCard/styles.module.scss';

const CollectionCard = ({ selection, image }) => (
  <div
    className={styles.container}
    style={{
      background: `linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%), url(${image})`,
    }}
  >
    <h3 className={styles.title}>{selection}</h3>
  </div>
);

export default CollectionCard;
