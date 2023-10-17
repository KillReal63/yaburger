import { increment, decrement } from './counter';

import counterSlice from './counter';

describe('counter reducer', () => {
  const initialState = {
    ids: [],
  };
  it('increment id', () => {
    const id = '#123';
    const newState = counterSlice(initialState, increment(id));

    expect(newState.ids.length).toBe(1);
  });
  it('decrement id', () => {
    const id = '#123';
    const newState = counterSlice(initialState, decrement(id));
    expect(newState.ids.length).toBe(0);
  });
});
