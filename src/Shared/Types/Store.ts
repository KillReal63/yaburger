import { cartState } from '../../Services/Slices/cart';
import { orderState } from '../../Services/Slices/order';

export type Store = {
  cart: cartState;
  order: orderState;
};
