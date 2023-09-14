import { createSlice } from '@reduxjs/toolkit';
import { Ingredient } from '../../Shared/Types/Ingredient';

export type cartState = typeof initialState;

const initialState = {
  bun: {
    price: 0,
  },
  ingredients: [] as Ingredient[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addIngredient(state, action) {
      console.log(state);

      state.ingredients = [...state.ingredients, action.payload];
    },
    deleteIngredient(state, action) {
      state.ingredients = [...state.ingredients].filter(
        (item) => item.unID !== action.payload.unID
      );
    },
    toggleBun(state, action) {
      state.bun = action.payload;
    },
    constructorReorder(state, action) {
      const ingredients = [...state.ingredients];
      ingredients.splice(
        action.payload.to,
        0,
        ingredients.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        ingredients: ingredients,
      };
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  toggleBun,
  constructorReorder,
} = cartSlice.actions;
export default cartSlice.reducer;
