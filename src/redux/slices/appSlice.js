import { createSlice, createAction } from '@reduxjs/toolkit';
import { INITIAL_LATLON } from 'utils/constants/map';
import {
  LOADED,
  SET_LOCATION,
  SET_IS_CONNECTED,
  SET_BOTTOM_SHEET
} from 'utils/constants/reducers';

export const setIsConnected = createAction(SET_IS_CONNECTED);
export const loaded = createAction(LOADED);
export const setLocation = createAction(SET_LOCATION);
export const setBottomSheet = createAction(SET_BOTTOM_SHEET);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isConnected: false,
    isLoaded: false,
    location: {
      latitude: INITIAL_LATLON.latitude,
      longitude: INITIAL_LATLON.longitude
    },
    bottomSheet: {
      show: false,
      loaded: false,
      data: {}
    }
  },
  reducers: {
    [setIsConnected]: (state, action) => {
      state.isConnected = action.payload;
    },
    [loaded]: (state, action) => {
      state.isLoaded = action.payload;
    },
    [setLocation]: (state, action) => {
      state.location = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    },
    [setBottomSheet]: (state, action) => {
      state.bottonSheet = action.payload;
    }
  },
});

export default appSlice.reducer;
