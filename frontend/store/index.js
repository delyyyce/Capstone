import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import itemsReducer from './itemsSlice';
import { authApi } from '../api/authApi';
import { itemsApi } from '../api/itemsApi';
import { reviewsApi } from '../api/reviewsApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      itemsApi.middleware,
      reviewsApi.middleware,
    ),
});

export default store;
