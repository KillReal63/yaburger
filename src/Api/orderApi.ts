import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlPath, ordersPath } from '../Shared/path';

const url = `${urlPath}${ordersPath}`;

export const createOrder = createAsyncThunk(
  'order/create-order',
  async (data: string[]) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          ingredients: data,
        }),
      });
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);
