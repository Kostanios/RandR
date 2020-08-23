import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DataAPI from 'api/data';
import {
  SET_CURRENT_SPOT,
  GET_DATA_THUNK,
  GET_SPOT_BY_ID_THUNK,
} from 'utils/constants/reducers';

export const getDataThunk = createAsyncThunk(GET_DATA_THUNK, async () => {
  const { data } = await DataAPI.getData();
  return data;
});

// TODO: remove, data.spotsData contains everything
export const getSpotByIdThunk = createAsyncThunk(
  GET_SPOT_BY_ID_THUNK,
  async (id) => {
    const response = await DataAPI.getSpotById(id);
    return response.data;
  }
);

export const spotSlice = createSlice({
  name: 'data',
  initialState: {
    id: undefined,
    currentSpot: undefined,
    isLoading: false,
    spotsData: [],
    selections: {},
  },
  reducers: {
    [SET_CURRENT_SPOT]: (state, action) => {
      state.id = action.payload.id;
      if (typeof action.payload.id === 'number') {
        state.currentSpot = state.spotsData.find(
          (spot) => spot.id === action.payload.id
        );
      } else {
        state.currentSpot = undefined;
      }
    },
  },
  extraReducers: {
    [getDataThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [getDataThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        state.spotsData = action.payload.data;
        state.selections = action.payload.selections;
        state.isLoading = false;
      }
    },
    [getDataThunk.rejected]: (state, action) => {
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
      if (typeof state.id === 'number' && !state.currentSpot) {
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
