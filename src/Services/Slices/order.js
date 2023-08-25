import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk('order/create-order', async () => {
  try {
    const response = await fetch('/orders', {
      method: 'POST',
      body: JSON.stringify(),
    });
    if (!response.ok) {
      throw new Error('Нет ответа сети');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error();
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: { isOpen: false, loading: false, error: null, data: [] },
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
        state.data = payload.data;
        state.orderNumber = payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.orderNumber = null;
      });
  },
});

export const {
  open,
  close,
  createOrderPending,
  createOrderFulfilled,
  createOrderRejected,
} = orderSlice.actions;
export default orderSlice.reducer;
