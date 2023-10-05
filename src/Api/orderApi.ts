import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlPath } from '../Shared/path';
import { Token } from '../Shared/Types/Token';
import { getCookie } from '../Helpers';
import { getRefreshToken } from './tokenApi';

type Props = Token & {
  arr: string[];
};

const url = `${urlPath}/orders`;

export const createOrder = createAsyncThunk(
  'order/create-order',
  async ({ arr, token }: Props) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token as string,
        },
        body: JSON.stringify({
          ingredients: arr,
        }),
      });
      if (!response.ok) {
        //под вопросом
        const oldRefreshToken = getCookie('refreshToken');
        const { refreshToken, accessToken } = await getRefreshToken(
          oldRefreshToken as Token
        );
        document.cookie = `refreshToken=${refreshToken};`;
        document.cookie = `accessToken=${accessToken};`;
        return { accessToken, refreshToken };
      }
      const result = await response.json();
      if (result.message === 'jwt expired') {
      }
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);
