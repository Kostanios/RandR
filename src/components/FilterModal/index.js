import React, { useEffect, useRef } from 'react';
import filters from '../../mocks/filters';
import useModal from '../../utils/hooks/useModal';

import styles from './styles.module.scss';

const FilterModal = ({ callback, parentRef }) => {
  const modal = useRef(null);

  const { isVisible } = useModal(modal, parentRef);

  const filterItems = filters.map((item) => {
    const { filter } = item;
    return (
      <label className={styles.filterItem} key={filter}>
        <input type="checkbox" name={filter} />
        <span className={styles.checkmark} />
        {filter}
      </label>
    );
  });

  if (isVisible) {
    return (
      <div ref={modal} className={styles.container}>
        <form className={styles.formContainer}>
          {filterItems}
          <button className={styles.button} type="button">
            Подтвердить
          </button>
        </form>
      </div>
    );
  }
  return null;
};

export default FilterModal;
