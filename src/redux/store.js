import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
import globalWindowReducer from './slices/globalWindowSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    globalWindow: globalWindowReducer
  },
});
