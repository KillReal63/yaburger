import { createSlice } from '@reduxjs/toolkit';

export type feedState = typeof initialState;

const initialState = {
  orders: [],
  total: null,
  totalToday: null,
  isOpen: false,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    connect: (state, { payload }) => {
      state.orders = payload.orders;
      state.total = payload.total;
      state.totalToday = payload.totalToday;
    },
    open: (state, {payload}) => {
      state.isOpen = true
    }
  },
});

export const { connect } = feedSlice.actions;

export default feedSlice.reducer;
