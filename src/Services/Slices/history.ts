import { createSlice } from '@reduxjs/toolkit';

export type historyState = {
  data: [];
  total: number | null;
  totalToday: null;
}

const initialState: historyState = {
  data: [],
  total: null,
  totalToday: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    connect: (state, { payload }) => {
      state.data = payload.orders;
      state.total = payload.total;
      state.totalToday = payload.totalToday;
    },
  },
});

export const { connect } = historySlice.actions;

export default historySlice.reducer;
