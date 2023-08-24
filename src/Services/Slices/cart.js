import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    bun: {
      price: 0,
    },
    ingredients: [],
  },
  reducers: {
    addIngredient(state, action) {
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
      )
      return {
        ...state,
        ingredients: ingredients,
      };
    }
  },
});

export const { addIngredient, deleteIngredient, toggleBun, constructorReorder } = cartSlice.actions;
export default cartSlice.reducer;
