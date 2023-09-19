import { cartState } from '../../Services/Slices/cart';
import { orderState } from '../../Services/Slices/order';
import { ingredientState } from '../../Services/Slices/ingredients';
import { counterState } from '../../Services/Slices/counter';
import { userState } from '../../Services/Slices/user';

type currentIngredient = {
  isOpen: boolean;
  ingredient: {
    _id: '';
  };
};

export type Store = {
  cart: cartState;
  order: orderState;
  ingredients: ingredientState;
  counter: counterState;
  currentIngredient: currentIngredient;
  user: userState;
};
