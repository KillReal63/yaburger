import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetch-ingredients',
  async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
);
