import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from 'api/auth';
import { SET_JWT, SET_LOGINED, CONFIRM_JWT, CONFIRM_OTP, LOG_IN, SET_PHONE_NUMBER, SET_AUTH_COMPONENT } from 'utils/constants/reducers';
import { messages } from 'utils/constants/response';
import { COMPONENT_CONFIRM_OTP, COMPONENT_LOG_IN } from 'utils/constants/components';

export const logInThunk = createAsyncThunk(LOG_IN, async ({ getState }) => {
  const { phoneNumber, isLoading } = getState().auth;
  if (isLoading) {
    return;
  }
  const response = await AuthAPI.logIn(phoneNumber);
  return response.data;
})

export const confirmJwtThunk = createAsyncThunk(CONFIRM_JWT, async (jwt, { getState }) => {
  if (getState().auth.isLoading) {
    return;
  }
  const response = await AuthAPI.confirmJwt(jwt);
  return response.data;
})

export const confirmOtpThunk = createAsyncThunk(CONFIRM_OTP, async (otp, { getState }) => {
  const { isLoading, phoneNumber } = getState().auth;
  if (isLoading) {
    return;
  }
  const response = await AuthAPI.confirmOtp({ phoneNumber, otp });
  return response.data;
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwt: '',
    phoneNumber: '',
    isUserNew: false,
    isLoading: false,
    errorMessage: '',
    isOtpSent: false,
    isLogined: false,
    currentComponent: COMPONENT_LOG_IN
  },
  reducers: {
    [SET_JWT]: (state, action) => {
      state.jwt = action.payload;
    },
    [SET_PHONE_NUMBER]: (state, action) => {
      state.phoneNumber = action.payload;
    },
    [SET_LOGINED]: (state, action) => {
      state.isLogined = action.payload;
    },
    [SET_AUTH_COMPONENT]: (state, action) => {
      state.currentComponent = action.payload || COMPONENT_LOG_IN;
    }
  },
  extraReducers: {
    [logInThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [logInThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        const { message } = action.payload;
        if (message === messages.OTP_SEND) {
          state.isOtpSent = true;
          state.currentComponent = COMPONENT_CONFIRM_OTP;
        } else {
          state.isOtpSent = false;
          console.log(`/login post response: ${action.payload}`);
        }
        state.isLoading = false;
      }
    },
    [logInThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
    [confirmJwtThunk.pending]: (state) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [confirmJwtThunk.fulfilled]: (state, action) => {
      if (state.isLoading) {
        const { message, jwt } = action.payload;
        state.jwt = jwt;
        state.isUserNew = messages.SINGUP === message;
        state.isLogined = true;
        state.isLoading = false;
      }
    },
    [confirmJwtThunk.rejected]: (state, action) => {
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
        state.jwt = action.payload.jwt;
        state.isLogined = true;
        state.isLoading = false;
      }
    },
    [confirmOtpThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  }
});

export const {
  setAuthComponent,
  setJwt,
  setIsLogined,
  setPhoneNumber
} = authSlice.actions;

export default authSlice.reducer;
