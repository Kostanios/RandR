import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { INITIAL_LATLON } from 'utils/constants/map';
import DataAPI from 'api/data';
import {
  PIN,
  SET_LOADED,
  SET_LOCATION,
  SET_USER_LOCATION,
  SET_IS_CONNECTED,
  SET_BOTTOM_SHEET,
  SET_NAVIGATION_VISIBILITY,
} from 'utils/constants/reducers';
import md from 'utils/mobileDetector';

export const pinThunk = createAsyncThunk(PIN, async () => {
  await DataAPI.pin();
});

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isConnected: false,
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
  extraReducers: {
    [pinThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [pinThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        state.isConnected = true;
        state.isLoading = false;
      }
    },
    [pinThunk.rejected]: (state, action) => {
      console.warn(action.error);
      state.isLoading = false;
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
} = appSlice.actions;

export default appSlice.reducer;
