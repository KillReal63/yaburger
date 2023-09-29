import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setLoading, setError } from '../../Helpers/response';
import { getOrders } from '../../Api/getOrdersApi';

interface WebsocketState {
  soket: WebSocket | null;
  isConnected: boolean;
  loading?: boolean;
}

const initialState: WebsocketState = {
  soket: null,
  isConnected: false,
  loading: false,
};

const websoketSlice = createSlice({
  name: 'websoket',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.soket = new WebSocket(action.payload);
      state.soket.onopen = () => {
        state.isConnected = true;
      };
      state.soket.onclose = () => {
        state.isConnected = false;
      };
    },
    disconnect: (state) => {
      //@ts-ignore
      state.soket.close();
      state.soket = null;
      state.isConnected = false;
    },
    sendMessage: (state, { payload }) => {
      if (state.soket && state.isConnected) {
        state.soket.send(JSON.stringify(payload));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, setLoading)
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      })
      .addCase(getOrders.rejected, setError);
  },
});

export const { connect, disconnect, sendMessage } = websoketSlice.actions;

export default websoketSlice.reducer;
