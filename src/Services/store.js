import { configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './Slices/ingredients';
import cartSlice from './Slices/cart';
import currentIngredientSlice from './Slices/currentIngredient';
import counterSlice from './Slices/counter';
import orderSlice from './Slices//order';
import userSlice from './Slices/user';

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    cart: cartSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
    counter: counterSlice,
    user: userSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
