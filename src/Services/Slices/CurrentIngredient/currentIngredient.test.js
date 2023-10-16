import { open, close } from './currentIngredient';

import currentIngredientSlice from './currentIngredient';

describe('current ingredient reducer', () => {
  const initialState = {
    isOpen: false,
    ingredient: {},
  };

  it('open action', () => {
    const ingredient = { name: 'Tomato' };
    const newState = currentIngredientSlice(initialState, open(ingredient));
    const expectedState = {
      isOpen: true,
      ingredient: ingredient,
    };
    expect(newState).toEqual(expectedState);
  });

  it('close action', () => {
    const newState = currentIngredientSlice(initialState, close());
    const expectedState = {
      isOpen: false,
      ingredient: {},
    };
    expect(newState).toEqual(expectedState);
  });
});
