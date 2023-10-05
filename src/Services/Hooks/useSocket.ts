import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '../Slices/feed';
import { connect as connectHistory } from '../Slices/history';
import { Token } from '../../Shared/Types/Token';
import { getCookie } from '../../Helpers';
import { authUser } from '../../Api/userApi';

export const useSocket = (url: string) => {
  const ws = useRef<WebSocket | null>(null);
  const dispatch: any = useDispatch();
  const getFeed = () => {
    ws.current = new WebSocket(url);
    ws.current.onopen = () => {
      console.log('Complete');
    };
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(connect(data));
    };
  };
  const getHistory = (token: string) => {
    const wsToken = `?token=${token.replace('Bearer ', '')}`;
    ws.current = new WebSocket(`${url}${wsToken}`);
    ws.current.onopen = () => {
      console.log('Complete');
    };
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.message === 'Invalid or missing token') {
        const token = getCookie('accessToken');
        dispatch(authUser({ token } as Token));
        dispatch(connectHistory(data));
      } else {
        dispatch(connectHistory(data));
      }
    };
    ws.current.onerror = (event) => {
      console.log(event, event);
    };
  };
  return { getFeed, getHistory };
};
