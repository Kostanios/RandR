import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredSpotData, setCurrentSpot } from 'redux/slices/dataSlice';
import styles from './styles.module.scss';

export const SearchComponent = ({ hasFocus, toggleFocus }) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  function onChangeHandler(e) {
    setSearchString(e.currentTarget.value);
    dispatch(setFilteredSpotData({ searchStr: e.currentTarget.value }));
  }
  return (
    <input
      type="text"
      placeholder="Введите название..."
      className={styles.searchBarInput}
      value={searchString}
      onChange={onChangeHandler}
      onFocus={() => toggleFocus(true)}
      onBlur={() => toggleFocus(false)}
    />
  );
};
