import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk(
  'order/get-order',
  async (url: string) => {
    try {
      

     
      const response = new WebSocket(url);
 

    } catch (error) {
      console.error();
      throw error;
    }
  }
);
