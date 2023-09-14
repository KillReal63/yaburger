import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from '../../Api/ingredientsApi';

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
