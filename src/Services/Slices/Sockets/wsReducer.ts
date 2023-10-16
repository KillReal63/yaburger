import {
  Message,
  WSActions,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from './wsActions';

type WSState = {
  wsConnected: boolean;
  message: Message | null;
  error?: string | null;
};

const initialState: WSState = {
  wsConnected: false,
  message: null,
  error: null,
};

export const wsReducer = (state = initialState, action: WSActions): WSState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        message: action.payload,
      };
    default:
      return state;
  }
};
