import io from 'socket.io-client';
import { useDispatch } from 'react-redux';

import { updateData } from 'redux/slices/dataSlice';
import { setAppId } from 'redux/slices/appSlice';

import config from './config';

const socket = io(config.socketUrl);
export default () => {
  const dispatch = useDispatch();

  socket.on('SET_APP_ID', (id) => dispatch(setAppId(id)));
  socket.on('UPDATE_DATA', (data) => dispatch(updateData(data)));
};
