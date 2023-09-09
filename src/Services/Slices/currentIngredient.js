import { createSlice } from '@reduxjs/toolkit';

const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState: {
    isOpen: false,
    ingredient: {},
  },
  reducers: {
    open(state, { payload }) {
      state.isOpen = true;
      state.ingredient = payload;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = currentIngredientSlice.actions;
export default currentIngredientSlice.reducer;
