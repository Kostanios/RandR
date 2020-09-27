import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from 'api/auth';
import {
  AUTH,
  SET_LOGINED,
  REQUEST_OTP,
  CONFIRM_OTP,
  SET_PHONE,
  SET_AUTH_COMPONENT,
} from 'utils/constants/reducers';
import { messages } from 'utils/constants/response';
import {
  COMPONENT_CONFIRM_OTP,
  COMPONENT_LOG_IN,
} from 'utils/constants/components';

export const authThunk = createAsyncThunk(AUTH, async () => {
  const response = await AuthAPI.auth();
  return response;
});

export const requestOtpThunk = createAsyncThunk(REQUEST_OTP, async (phone) => {
  const response = await AuthAPI.requestOtp(phone);
  console.log(response);
  return response;
});

export const confirmOtpThunk = createAsyncThunk(
  CONFIRM_OTP,
  async (otp, { getState }) => {
    const { phone } = getState().auth;
    const response = await AuthAPI.confirmOtp({ phone, otp });
    return response;
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
    otp: {
      isSent: false,
      attempts: 0,
    },
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
    [requestOtpThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [requestOtpThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        if (action.payload.message === messages.SUCCESS) {
          state.otp = {
            isSent: true,
            attempts: 3,
          };
        }
        state.isLoading = false;
      }
    },
    [requestOtpThunk.rejected]: (state, action) => {
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
        state.otp = {
          isSent: false,
          attempts: 0,
        };
        console.log(action);
        state.isLogined = true;
        state.phone = action.payload.data.phone;
        state.isAdmin = action.payload.data.admin.length > 0;
        state.profile = action.payload.data.profile;
        state.favorites = action.payload.favorites;
        state.orders = action.payload.orders;
        state.isLoading = false;
      }
    },
    [confirmOtpThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.otp.attempts--;
      if (state.otp.attempts === 0) state.otp.isSent = false;
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
