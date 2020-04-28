import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});
