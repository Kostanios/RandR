import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from 'api/auth';
import {
  AUTH,
  SET_LOGINED,
  CONFIRM_OTP,
  LOG_IN,
  SET_PHONE,
  SET_AUTH_COMPONENT,
} from 'utils/constants/reducers';
import { messages } from 'utils/constants/response';
import {
  COMPONENT_CONFIRM_OTP,
  COMPONENT_LOG_IN,
} from 'utils/constants/components';

export const authThunk = createAsyncThunk(AUTH, async () => {
  const { data } = await AuthAPI.auth();
  return data;
});

export const logInThunk = createAsyncThunk(LOG_IN, async (phone) => {
  const response = await AuthAPI.requestOtp(phone);
  return response;
});

export const confirmOtpThunk = createAsyncThunk(
  CONFIRM_OTP,
  async (otp, { getState }) => {
    const { phone } = getState().auth;
    const response = await AuthAPI.confirmOtp({ phone, otp });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phone: '',
    profile: {},
    favorites: [],
    isAdmin: false,
    isLoading: false,
    errorMessage: '',
    isOtpSent: false,
    isLogined: false,
    currentComponent: COMPONENT_LOG_IN,
  },
  reducers: {
    [SET_PHONE]: (state, action) => {
      state.phone = action.payload;
    },
    [SET_LOGINED]: (state, action) => {
      state.isLogined = action.payload;
    },
    [SET_AUTH_COMPONENT]: (state, action) => {
      state.currentComponent = action.payload || COMPONENT_LOG_IN;
    },
  },
  extraReducers: {
    [logInThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [logInThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        console.log(action.payload);
        if (action.payload.message === messages.SUCCESS) {
          state.isOtpSent = true;
          state.currentComponent = COMPONENT_CONFIRM_OTP;
        } else {
          state.isOtpSent = false;
          console.log(`/phone post response: ${action.payload}`);
        }
        state.isLoading = false;
      }
    },
    [logInThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
    [confirmOtpThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [confirmOtpThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        state.isLogined = true;
        state.phone = action.payload.user.phone;
        state.isAdmin = action.payload.user.admin.length > 0;
        state.profile = action.payload.user.profile;
        state.isLoading = false;
      }
    },
    [confirmOtpThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
    [authThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [authThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        state.isLogined = true;
        state.phone = action.payload.phone;
        state.isAdmin = action.payload.admin.length > 0;
        state.profile = action.payload.profile;
        state.favorites = action.payload.favorites;
        state.orders = action.payload.orders;
        state.isLoading = false;
      }
    },
    [authThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  },
});

export const { setAuthComponent, setIsLogined, setPhone } = authSlice.actions;

export default authSlice.reducer;
