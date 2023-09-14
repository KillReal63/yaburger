import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from '../Helpers/index';
import { getRefreshToken } from './tokenApi';
import { User } from '../Shared/Types/User';
import { Token } from '../Shared/Types/Token';

export const registerUser = createAsyncThunk(
  'user/register-user',
  async ({ email, password, name }: User) => {
    try {
      const response = await fetch(
        'https://norma.nomoreparties.space/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, name }),
        }
      );
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      const { accessToken, refreshToken } = result;
      document.cookie = `accessToken=${accessToken}`;
      document.cookie = `refreshToken=${refreshToken}`;
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login-user',
  async ({ email, password }: User) => {
    try {
      const response = await fetch(
        'https://norma.nomoreparties.space/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
      console.log(result);
      const { accessToken, refreshToken, user } = result;
      document.cookie = `refreshToken=${refreshToken}`;
      document.cookie = `accessToken=${accessToken}`;
      document.cookie = `user=${JSON.stringify(user)}`;
      document.cookie = `isAuth=${true}`;
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);

export const authUser = createAsyncThunk('user/auth', async (token: string) => {
  try {
    const response = await fetch(
      'https://norma.nomoreparties.space/api/auth/user',
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (!response.ok) {
      console.log('Нет ответа сети');
    }
    const result = await response.json();
    if (result.message === 'jwt expired') {
      const oldRefreshToken = getCookie('refreshToken');
      const { refreshToken, accessToken } = await getRefreshToken(
        oldRefreshToken as Token
      );
      document.cookie = `refreshToken=${refreshToken};`;
      document.cookie = `accessToken=${accessToken};`;
      return { accessToken, refreshToken };
    }
  } catch (e) {
    console.log(e, 'error');
  }
});

export const logoutUser = createAsyncThunk('user/logout-user', async () => {
  const response = await fetch(
    'https://norma.nomoreparties.space/api/auth/logout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: getCookie('refreshToken') }),
    }
  );
  const result = await response.json();
  return result;
});

export const updateUser = createAsyncThunk(
  'user/update-user',
  async ({ email, name }: User) => {
    const token = getCookie('accessToken');
    const response = await fetch(
      'https://norma.nomoreparties.space/api/auth/user',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        } as Token,
        body: JSON.stringify({ email, name }),
      }
    );
    const result = await response.json();
    if (result.message === 'jwt expired') {
      const oldRefreshToken = getCookie('refreshToken');
      const { refreshToken, accessToken } = await getRefreshToken(
        oldRefreshToken as Token
      );
      document.cookie = `refreshToken=${refreshToken};`;
      document.cookie = `accessToken=${accessToken};`;
      return { accessToken, refreshToken };
    }
    const { user } = result;
    document.cookie = `user=${JSON.stringify(user)}`;
    return result;
  }
);
