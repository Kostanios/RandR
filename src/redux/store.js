import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
import globalWindowReducer from './slices/globalWindowSlice';
import spotsSlice from './slices/spotsSlice';
import bottomSheetSlice from './slices/bottomSheetSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    spots: spotsSlice,
    globalWindow: globalWindowReducer,
    bottomSheet: bottomSheetSlice,
  },
});
