import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
import globalWindowReducer from './slices/globalWindowSlice';
import spotSlice from './slices/spotSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    spot: spotSlice,
    globalWindow: globalWindowReducer
  },
});
