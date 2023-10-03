import { createSlice } from '@reduxjs/toolkit';

interface feedState {
  orders: [];
  total: number | null;
  totalToday: null;
}

const initialState: feedState = {
  orders: [],
  total: null,
  totalToday: null,
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
  },
});

export const { connect } = feedSlice.actions;

export default feedSlice.reducer;
