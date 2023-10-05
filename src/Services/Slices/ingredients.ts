import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from '../../Api/ingredientsApi';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { setLoading, setError } from '../../Helpers/index';

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
      .addCase(fetchIngredients.pending, setLoading)
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.data;
      })
      .addCase(fetchIngredients.rejected, setError);
  },
});

export default ingredientsSlice.reducer;
