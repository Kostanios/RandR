import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SpotAPI from 'api/spots';
import {
  SET_CURRENT_SPOT,
  GET_SPOTS_THUNK,
  GET_SPOT_BY_ID_THUNK,
} from 'utils/constants/reducers';

export const getSpotsThunk = createAsyncThunk(
  GET_SPOTS_THUNK,
  async (params) => {
    const start = params ? params.start : undefined;
    const limit = params ? params.limit : 20;
    const response = await SpotAPI.getSpots({ start, limit });
    return response.data;
  }
);

export const getSpotByIdThunk = createAsyncThunk(
  GET_SPOT_BY_ID_THUNK,
  async (id) => {
    const response = await SpotAPI.getSpotById(id);
    return response.data;
  }
);

export const spotSlice = createSlice({
  name: 'spots',
  initialState: {
    id: undefined,
    currentSpot: undefined,
    isLoading: false,
    spotsData: [],
  },
  reducers: {
    [SET_CURRENT_SPOT]: (state, action) => {
      state.id = action.payload.id;
      if (action.payload.id) {
        state.currentSpot = state.spotsData.find(
          (spot) => spot.id === action.payload.id
        );
      } else {
        state.currentSpot = undefined;
      }
    },
  },
  extraReducers: {
    [getSpotsThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [getSpotsThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        const newSpots = action.payload.filter(
          (spot) => !state.spotsData.find((exSpot) => exSpot.id === spot.id)
        );
        state.spotsData = [...newSpots, ...state.spotsData];
        state.isLoading = false;
      }
    },
    [getSpotsThunk.rejected]: (state, action) => {
      console.warn(action.error);
      state.isLoading = false;
    },
    [getSpotByIdThunk.fulfilled]: (state, action) => {
      const isMissingInData = !state.spotsData.find(
        (spot) => spot.id === action.payload.id
      );
      if (isMissingInData) {
        state.spotsData.unshift(action.payload);
      }
      if (state.id && !state.currentSpot) {
        state.currentSpot = action.payload;
      }
    },
    [getSpotByIdThunk.rejected]: (_state, action) => {
      console.warn(action.error);
    },
  },
});

export const { setCurrentSpot } = spotSlice.actions;

export default spotSlice.reducer;
