import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
import globalWindowReducer from './slices/globalWindowSlice';
import dataSlice from './slices/dataSlice';
import bottomSheetSlice from './slices/bottomSheetSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    data: dataSlice,
    globalWindow: globalWindowReducer,
    bottomSheet: bottomSheetSlice,
  },
});
