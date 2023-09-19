import { createSlice } from '@reduxjs/toolkit';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { v4 as uuidv4 } from 'uuid';

export type cartState = typeof initialState;

const initialState = {
  bun: {
    price: 0,
    id: '',
    name: '',
    image: '',
  },
  ingredients: [] as Ingredient[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients = [
        ...state.ingredients,
        { ...action.payload, unID: uuidv4() },
      ];
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