import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createOrder } from '../../../Api/orderApi';
import { setLoading, setError } from '../../../Helpers/index';

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
    open(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    close(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, setLoading)
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order = payload;
        state.orderNumber = payload.order.number;
      })
      .addCase(createOrder.rejected, setError);
  },
});

export const { open, close } = orderSlice.actions;

export default orderSlice.reducer;
