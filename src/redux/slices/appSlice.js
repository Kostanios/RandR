import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_LATLON } from 'utils/constants/map';
import {
  SET_LOADED,
  SET_LOCATION,
  SET_USER_LOCATION,
  SET_IS_CONNECTED,
  SET_BOTTOM_SHEET,
  SET_NAVIGATION_VISIBILITY,
  SET_SOCKET_STATE,
  SET_APP_ID,
} from 'utils/constants/reducers';
import md from 'utils/mobileDetector';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    appId: undefined,
    isLoading: false,
    isConnected: false,
    isSocketConnected: false,
    isLoaded: false,
    isMobile: md.mobile() !== null,
    isNavigationVisible: true,
    location: {
      latitude: INITIAL_LATLON.latitude,
      longitude: INITIAL_LATLON.longitude,
    },
    userLocation: null,
    bottomSheet: {
      show: false,
      loaded: false,
      data: {},
    },
  },
  reducers: {
    [SET_APP_ID]: (state, action) => {
      state.appId = action.payload;
      state.isSocketConnected = true;
    },
    [SET_IS_CONNECTED]: (state, action) => {
      state.isConnected = action.payload;
    },
    [SET_LOADED]: (state, action) => {
      state.isLoaded = action.payload;
    },
    [SET_LOCATION]: (state, action) => {
      state.location = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    [SET_USER_LOCATION]: (state, action) => {
      state.userLocation = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    [SET_BOTTOM_SHEET]: (state, action) => {
      state.bottomSheet = action.payload;
    },
    [SET_NAVIGATION_VISIBILITY]: (state, action) => {
      state.isNavigationVisible = action.payload;
    },
  },
});

export const {
  setIsConnected,
  setLoaded,
  setLocation,
  setUserLocation,
  setBottomSheet,
  setNavigationVisibility,
  setAppId,
} = appSlice.actions;

export default appSlice.reducer;
