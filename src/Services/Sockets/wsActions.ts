export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' =
  'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' =
  'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export type Data = {
  find: any;
  length: number;
  ingredients: Array<string>;
  _id: string;
  status?: string;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Message = {
  map: any;
  success: boolean;
  orders: Array<Data>;
  total: number;
  totalToday: number;
  message?: string;
};

export type ConnectionStart = {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
};

export type ConnectionClose = {
  readonly type: typeof WS_CLOSE;
};

export type ConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: string;
};

export type ConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
};

export type ConnectionClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export type GetMessage = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: Message;
};

export type WSActions =
  | ConnectionStart
  | ConnectionClose
  | ConnectionSuccess
  | ConnectionError
  | ConnectionClosed
  | GetMessage;

export type WSStoreActions = {
  wsInit: typeof WS_CONNECTION_START;
  wsClose: typeof WS_CLOSE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
};

export const connectAll = (): ConnectionStart => ({
  type: WS_CONNECTION_START,
  payload: `wss://norma.nomoreparties.space/orders/all`,
});

export const connectHistory = (token: string): ConnectionStart => ({
  type: WS_CONNECTION_START,
  payload: `wss://norma.nomoreparties.space/orders?token=${token}`,
});

export const disconnect = (): ConnectionClose => ({
  type: WS_CLOSE,
});
