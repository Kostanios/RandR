import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as routeNames from '@utils/constants/routeNames';

import { getDataById } from '@api/data';
import { setBottonSheet } from '@redux/actions/application';
import { get } from '@storage/asyncStorage/';
import { DATA } from '@utils/constants/asyncStorage';

import HomeView from './View';

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [_data, _setData] = useState([]);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const items = await get(DATA);
    _setData(JSON.parse(items));
    setData(JSON.parse(items));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const restore = useCallback(() => {
    setData(_data);
  });

  const filterData = useCallback(text => {
    const sortedData = data.filter(item => item.title.indexOf(text) > -1);
    setData(sortedData);
  });

  const selectItem = useCallback(uid => {
    const selectedItem = data.map(item =>
      item.uid === uid ? { ...item, selected: !item.selected } : item
    );
    setData(selectedItem);
  });

  const explore = useCallback(async uid => {
    const data = await getDataById(uid);
    dispatch(setBottonSheet({ show: true, data, loaded: true }));
    navigation.navigate(routeNames.SEARCH);
  });

  return (
    <HomeView
      data={data}
      filterData={filterData}
      selectItem={selectItem}
      restore={restore}
      explore={explore}
    />
  );
};
