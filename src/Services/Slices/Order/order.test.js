import { open, close } from './order';
import orderSlice from './order';
import { createOrder } from '../../../Api/orderApi';

describe('order reducer', () => {
  const initialState = {
    isOpen: false,
    loading: false,
    error: null,
    orderNumber: null,
    order: [],
  };

  it('open action', () => {
    const newState = orderSlice(initialState, open(true));
    const expectedState = {
      isOpen: true,
      loading: false,
      error: null,
      orderNumber: null,
      order: [],
    };
    expect(newState).toEqual(expectedState);
  });

  it('close action', () => {
    const newState = orderSlice(initialState, close(false));
    const expectedState = {
      isOpen: false,
      loading: false,
      error: null,
      orderNumber: null,
      order: [],
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch pending', () => {
    const newState = orderSlice(initialState, createOrder.pending);
    const expectedState = {
      isOpen: false,
      loading: true,
      error: null,
      orderNumber: null,
      order: [],
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch fulfilled', () => {
    const responseData = { order: { number: '12345' } };
    const newState = orderSlice(
      initialState,
      createOrder.fulfilled(responseData)
    );
    const expectedState = {
      isOpen: false,
      loading: false,
      error: null,
      orderNumber: responseData.order.number,
      order: responseData,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch rejected', () => {
    const error = 'Error message';
    const newState = orderSlice(initialState, createOrder.rejected(error));
    const expectedState = {
      isOpen: false,
      loading: false,
      error,
      orderNumber: null,
      order: [],
    };
    expect(newState).toEqual(expectedState);
  });
});
