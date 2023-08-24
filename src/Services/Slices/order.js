import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: { isOpen: false },
  reducers: {
    open(state, action) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = orderSlice.actions;
export default orderSlice.reducer;
