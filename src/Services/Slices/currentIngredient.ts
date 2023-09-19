import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  ingredient: {},
};

const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
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
