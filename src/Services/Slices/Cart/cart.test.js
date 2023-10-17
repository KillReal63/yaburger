import {
  addIngredient,
  deleteIngredient,
  toggleBun,
  constructorReorder,
} from './cart';

import cartSlice from './cart';

describe('cart reducer', () => {
  const initialState = {
    bun: {
      price: 0,
      id: '',
      name: '',
      image: '',
    },
    ingredients: [],
  };

  it('should handle addIngredient', () => {
    const ingredient = { id: '1', name: 'Tomato' };
    const newState = cartSlice(initialState, addIngredient(ingredient));
    expect(newState.ingredients.length).toBe(1);
    expect(newState.ingredients[0]).toEqual({
      ...ingredient,
      unID: expect.any(String),
    });
  });

  it('should handle deleteIngredient', () => {
    const ingredient1 = { id: '1', name: 'Tomato', unID: '123' };
    const ingredient2 = { id: '2', name: 'Lettuce', unID: '456' };
    const state = {
      ...initialState,
      ingredients: [ingredient1, ingredient2],
    };

    const newState = cartSlice(state, deleteIngredient(ingredient1));

    expect(newState.ingredients.length).toBe(1);
    expect(newState.ingredients[0]).toEqual(ingredient2);
  });

  it('should handle toggleBun', () => {
    const bun = { id: '1', name: 'Burger Bun' };
    const newState = cartSlice(initialState, toggleBun(bun));

    expect(newState.bun).toEqual(bun);
  });

  it('should handle constructorReorder', () => {
    const ingredient1 = { id: '1', name: 'Tomato', unID: '123' };
    const ingredient2 = { id: '2', name: 'Lettuce', unID: '456' };
    const state = {
      ...initialState,
      ingredients: [ingredient1, ingredient2],
    };
    const payload = { from: 0, to: 1 };

    const newState = cartSlice(state, constructorReorder(payload));

    expect(newState.ingredients).toEqual([ingredient2, ingredient1]);
  });
});
