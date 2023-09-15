import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';
import authReducer from './slices/authSlice'; // add this line

const store = configureStore({
  reducer: {
    // add the reducer to apiSlice - apiSlice.reducer 
    // because a lot of reducers implement apiSlice class like productReducer 
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer, // add this line
  }, 
  // add middleware to defaultMiddleware by concatting 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // enable devTools 
  devTools: true,
});

export default store;
