import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from '../../Api/ingredientsApi';
import { Ingredient } from '../../Shared/Types/Ingredient';

export type ingredientState = typeof initialState;

const initialState = {
  loading: false,
  error: null || undefined,
  data: [] as Ingredient[],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
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
        if (state.error !== undefined) {
          action.error.message;
        }
      });
  },
});

export default ingredientsSlice.reducer;
