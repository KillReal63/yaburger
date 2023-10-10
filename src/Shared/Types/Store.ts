import { useDispatch } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import store from '../../Services/store';
import { WSActions } from '../../Services/Sockets/wsActions';

export type AppActions = WSActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;
