import React, { useRef, useState } from 'react';
import useModal from '../../utils/hooks/useModal';

import styles from './styles.module.scss';

const FilterModal = ({ callback, parentRef, filters }) => {
  const modal = useRef(null);
  const { isVisible } = useModal(modal, parentRef);

  if (isVisible) {
    return (
      <div ref={modal} className={styles.container}>
        <form className={styles.formContainer}>
          {filters.cuisines.map((item) => {
            const { name } = item;
            return (
              <label className={styles.filterItem} key={name}>
                <input type="checkbox" name={name} />
                <span className={styles.checkmark} />
                {name}
              </label>
            );
          })}
          <button className={styles.button} type="button" onClick={callback}>
            Подтвердить
          </button>
        </form>
      </div>
    );
  }
  return null;
};

export default FilterModal;
