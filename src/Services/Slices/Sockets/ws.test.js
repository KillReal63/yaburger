import { wsReducer } from './wsReducer';
import * as types from './wsActions';

describe('ws-reducer', () => {
  it('WebSocket connection', () => {
    expect(
      wsReducer(
        {},
        {
          type: types.WS_CONNECTION_SUCCESS,
        }
      )
    ).toEqual({
      error: undefined,
      wsConnected: true,
    });
    expect(
      wsReducer(
        {},
        {
          type: types.WS_CONNECTION_ERROR,
          payload: 'Error',
        }
      )
    ).toEqual({
      error: 'Error',
      wsConnected: false,
    });
    expect(
      wsReducer(
        {},
        {
          type: types.WS_CONNECTION_CLOSED,
        }
      )
    ).toEqual({
      error: undefined,
      wsConnected: false,
    });
    expect(
      wsReducer(
        {},
        {
          type: types.WS_GET_MESSAGE,
          payload: {},
        }
      )
    ).toEqual({
      error: undefined,
      message: {},
    });
  });
});
