import { createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk(
  'order/create-order',
  async (data) => {
    try {
      const response = await fetch(
        'https://norma.nomoreparties.space/api/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            ingredients: data,
          }),
        }
      );
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
