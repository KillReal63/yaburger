import { cartState } from '../../Services/Slices/cart';
import { orderState } from '../../Services/Slices/order';
import { ingredientState } from '../../Services/Slices/ingredients';
import { counterState } from '../../Services/Slices/counter';
import { currentIngredientState } from '../../Services/Slices/currentIngredient';
import { userState } from '../../Services/Slices/user';

export type Store = {
  cart: cartState;
  order: orderState;
  ingredients: ingredientState;
  counter: counterState;
  currentIngredient: currentIngredientState;
  user: userState;
};
