import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../Api/orderApi';
import { setLoading, setError } from '../../Helpers/response';

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
