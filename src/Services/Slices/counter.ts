import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [] as string[],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.ids = [...state.ids, action.payload];
    },
    decrement(state, action) {
      const elementToRemove = action.payload;
      const index = state.ids.indexOf(elementToRemove);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
