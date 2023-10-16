import { configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './Slices/Ingredients/ingredients';
import cartSlice from './Slices/Cart/cart';
import currentIngredientSlice from './Slices/CurrentIngredient/currentIngredient';
import counterSlice from './Slices/Counter/counter';
import orderSlice from './Slices/Order/order';
import userSlice from './User/user';
import { wsReducer } from './Sockets/wsReducer';
import { socketMiddleware } from './Sockets/socketMiddleware';
import {
  WS_CONNECTION_START,
  WS_CLOSE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_ERROR,
  WSStoreActions,
} from './Sockets/wsActions';

const wsActions: WSStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    cart: cartSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
    counter: counterSlice,
    user: userSlice,
    ws: wsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      socketMiddleware(wsActions)
    ),
});

export default store;
