import { Middleware, MiddlewareAPI } from 'redux';
import { AppActions, AppDispatch, RootState } from '../../../Shared/Types/Store';
import { Message, WSStoreActions } from './wsActions';

export const socketMiddleware = (wsActions: WSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let url = '';
    return (next) => (action: AppActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsClose, onOpen, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        url = action.payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: onError });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData: Message = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      if (type === wsClose && socket) {
        socket.close();
      }
      next(action);
    };
  }) as Middleware;
};
