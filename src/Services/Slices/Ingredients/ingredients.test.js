import { fetchIngredients } from '../../../Api/ingredientsApi';
import ingredientsSlice from './ingredients';

describe('fetch ingredients reducer', () => {
  const initialState = {
    loading: false,
    error: null,
    data: [],
  };

  it('fetch pending', () => {
    const newState = ingredientsSlice(initialState, fetchIngredients.pending);
    const expectedState = {
      loading: true,
      error: null,
      data: [],
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch fulfilled', () => {
    const responseData = { data: [{ id: 1, name: 'Ingredient 1' }] };
    const newState = ingredientsSlice(
      initialState,
      fetchIngredients.fulfilled(responseData)
    );
    const expectedState = {
      loading: false,
      error: null,
      data: responseData.data,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch rejected', () => {
    const error = 'Error message';
    const newState = ingredientsSlice(
      initialState,
      fetchIngredients.rejected(error)
    );
    const expectedState = {
      loading: false,
      error,
      data: [],
    };
    expect(newState).toEqual(expectedState);
  });
});
