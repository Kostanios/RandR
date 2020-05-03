import React, { useState } from 'react';
import SearchIcon from 'components/Svg/SearchNav';
import styles from './styles.module.scss';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const [hasFocus, toggleFocus] = useState(false);
  return (
    <div className={styles.searchWrapper}>
      <div className={`${styles.searchBarContainer} ${hasFocus ? styles.focused : ''}`}>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.searchBarInput}
          value={searchString}
          onChange={(event) => setSearchString(event.currentTarget.value)}
          onFocus={() => toggleFocus(true)}
          onBlur={() => toggleFocus(false)}
        />
      </div>
      <div className={styles.searchIcon}>
        <SearchIcon width="20px" height="20px" />
      </div>
    </div>
  );
};

export default SearchBar
