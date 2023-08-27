import { configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from '../../Services/Slices/ingredients';
import cartSlice from '../../Services/Slices/cart';
import currentIngredientSlice from '../../Services/Slices/currentIngredient';
import counterSlice from '../../Services/Slices/counter';
import orderSlice from '../../Services/Slices/order';

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    cart: cartSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
    counter: counterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
