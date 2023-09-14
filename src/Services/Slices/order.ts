import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../Api/orderApi';

export type orderState = typeof initialState;

const initialState = {
  isOpen: false,
  loading: false,
  error: null || undefined,
  orderNumber: null,
  order: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    open(state, action) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.orderNumber = null;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order = payload;
        state.orderNumber = payload.order.number;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        if (state.error !== undefined) {
          action.error.message;
        }
        state.orderNumber = null;
      });
  },
});

export const { open, close } = orderSlice.actions;

export default orderSlice.reducer;
