import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '../Slices/feed';
import { connect as connectHistory } from '../Slices/history';
import { Token } from '../../Shared/Types/Token';
import { getCookie } from '../../Helpers';
import { getRefreshToken } from '../../Api/tokenApi';

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
    ws.current.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (data.success === false) {
        const oldRefreshToken = getCookie('refreshToken');
        const { refreshToken, accessToken } = await getRefreshToken(
          oldRefreshToken as Token
        );
        document.cookie = `refreshToken=${refreshToken};`;
        document.cookie = `accessToken=${accessToken};`;
        return { accessToken, refreshToken };
      } else {
        dispatch(connectHistory(data));
      }
    };
  };
  return { getFeed, getHistory };
};
