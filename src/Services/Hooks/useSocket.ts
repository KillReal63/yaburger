import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '../Slices/feed';
import { connect as connectHistory } from '../Slices/history';
import { getCookie } from '../../Helpers';

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
  const getHistory = () => {
    const token: any = getCookie('accessToken');
    const wsToken = `?token=${token.replace('Bearer ', '')}`;
    ws.current = new WebSocket(`${url}${wsToken}`);
    ws.current.onopen = () => {
      console.log('Complete');
    };
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(connectHistory(data));
    };
  };
  return { getFeed, getHistory };
};
