import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlPath, ordersPath } from '../Shared/path';
import { Token } from '../Shared/Types/Token';
import { getCookie } from '../Helpers';
import { getRefreshToken } from './tokenApi';

type Props = Token & {
  arr: string[] | undefined;
};

const url = `${urlPath}${ordersPath}`;

export const createOrder = createAsyncThunk(
  'order/create-order',
  async ({ arr, token }: Props) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        //@ts-ignore
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          ingredients: arr,
        }),
      });
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);
