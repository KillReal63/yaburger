import { createSlice } from '@reduxjs/toolkit';

interface historyState {
  history: [];
  total: number | null;
  totalToday: null;
}

const initialState: historyState = {
  history: [],
  total: null,
  totalToday: null,
};

const historySlice = createSlice({
  name: 'history-orders',
  initialState,
  reducers: {
    connect: (state, { payload }) => {
      state.history = payload.orders;
      state.total = payload.total;
      state.totalToday = payload.totalToday;
    },
  },
});

export const { connect } = historySlice.actions;

export default historySlice.reducer;
