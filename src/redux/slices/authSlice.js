import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from 'api/auth';
import {
  AUTH,
  SET_JWT,
  SET_LOGINED,
  CONFIRM_OTP,
  LOG_IN,
  SET_PHONE_NUMBER,
  SET_AUTH_COMPONENT,
} from 'utils/constants/reducers';
import { messages } from 'utils/constants/response';
import {
  COMPONENT_CONFIRM_OTP,
  COMPONENT_LOG_IN,
} from 'utils/constants/components';
import cookies from 'utils/cookieStorage';

export const authThunk = createAsyncThunk(AUTH, async () => {
  let jwt = cookies.get.jwt();
  const token = cookies.get.token();

  if (!jwt && token) {
    const { data } = await AuthAPI.token(token);
    cookies.set.jwt(data.token);
    cookies.set.token(token);
    jwt = data.token;
  }

  const response = await AuthAPI.auth(jwt);
  return { ...response.data, jwt };
});

export const logInThunk = createAsyncThunk(LOG_IN, async (phoneNumber) => {
  const response = await AuthAPI.requestOtp(phoneNumber);
  return response;
});

export const confirmOtpThunk = createAsyncThunk(
  CONFIRM_OTP,
  async (otp, { getState }) => {
    const { phoneNumber } = getState().auth;
    const response = await AuthAPI.confirmOtp({ phoneNumber, otp });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phoneNumber: '',
    jwt: '',
    profile: {},
    isAdmin: false,
    isUserNew: false,
    isLoading: false,
    errorMessage: '',
    isOtpSent: false,
    isLogined: false,
    currentComponent: COMPONENT_LOG_IN,
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
        cookies.set.jwt(action.payload.token);
        cookies.set.token(action.payload.refreshToken);

        state.isLogined = true;
        state.jwt = action.payload.token;
        state.phoneNumber = action.payload.user.phoneNumber;
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
        state.jwt = action.payload.jwt;
        state.phoneNumber = action.payload.phoneNumber;
        state.isAdmin = action.payload.admin.length > 0;
        state.profile = action.payload.profile;
        state.isLoading = false;
      }
    },
    [authThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error;
    },
  },
});

export const {
  setAuthComponent,
  setJwt,
  setIsLogined,
  setPhoneNumber,
} = authSlice.actions;

export default authSlice.reducer;
