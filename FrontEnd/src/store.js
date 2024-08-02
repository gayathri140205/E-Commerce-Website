
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';
import searchProductSliceReducer from './slices/searchProductSlice';

const store = configureStore({

  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    cart: cartSliceReducer, 
    auth: authSliceReducer, 
    search: searchProductSliceReducer
  },

  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware) 
});


export default store;
