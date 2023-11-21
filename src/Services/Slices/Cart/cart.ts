import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Ingredient } from '../../../Shared/Types/Ingredient';
import { v4 as uuidv4 } from 'uuid';

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
    addIngredient(state, action: PayloadAction<Ingredient>) {
      state.ingredients = [
        ...state.ingredients,
        { ...action.payload, unID: uuidv4() },
      ];
    },
    deleteIngredient(state, action: PayloadAction<Ingredient>) {
      state.ingredients = [...state.ingredients].filter(
        (item) => item.unID !== action.payload.unID
      );
    },
    toggleBun(state, action) {
      state.bun = action.payload;
    },
    constructorReorder(state, action: PayloadAction<any>) {
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
    resetCart(state, action) {
      state.ingredients = action.payload;
      state.bun = {
        price: 0,
        id: '',
        name: '',
        image: '',
      };
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  toggleBun,
  constructorReorder,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
