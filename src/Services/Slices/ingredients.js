import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetch-ingredients',
  async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error();
    }
  }
);

 const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.data;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ingredientsSlice.reducer;
