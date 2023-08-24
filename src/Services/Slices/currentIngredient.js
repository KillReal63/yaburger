import { createSlice } from '@reduxjs/toolkit';

const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState: { isOpen: false, compound: {} },
  reducers: {
    open(state, action) {
      state.isOpen = true;
      state.compound = action.payload;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = currentIngredientSlice.actions;
export default currentIngredientSlice.reducer;
