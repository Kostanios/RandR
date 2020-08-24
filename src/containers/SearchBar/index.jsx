import React, { useRef, useState } from 'react';
import SearchIcon from 'components/Svg/SearchNav';
import Filters from '../../components/Svg/Filters';
import styles from './styles.module.scss';
import FilterModal from '../../components/FilterModal';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const [hasFocus, toggleFocus] = useState(false);
  const refFilter = useRef(null);

  return (
    <div className={styles.searchWrapper}>
      <div
        className={`${styles.searchBarContainer} ${
          hasFocus ? styles.focused : ''
        }`}
      >
        <div className={styles.searchIcon}>
          <SearchIcon width="32px" height="32px" />
        </div>
        <input
          type="text"
          placeholder="Введите название..."
          className={styles.searchBarInput}
          value={searchString}
          onChange={(event) => setSearchString(event.currentTarget.value)}
          onFocus={() => toggleFocus(true)}
          onBlur={() => toggleFocus(false)}
        />
      </div>
      <div className={styles.filtersContainer}>
        <button ref={refFilter} type="button" className={styles.filtersButton}>
          <Filters />
          <p className={styles.textFilters}>Фильтры</p>
        </button>
        <FilterModal parentRef={refFilter} />
      </div>
    </div>
  );
};

export default SearchBar;
