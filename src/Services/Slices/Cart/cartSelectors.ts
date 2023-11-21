import { RootState } from '../../../Shared/Types/Store';

export const getTotalPrice = (store: RootState) =>
  store.cart.ingredients.reduce((acc, item) => acc + item.price, 0);
export const getBun = (store: RootState) => store.cart.bun;
export const getIngredients = (store: RootState) => store.cart.ingredients;
