import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from '../Helpers/index';
import { getRefreshToken } from './tokenApi';
import { User } from '../Shared/Types/User';
import { NewUser } from '../Shared/Types/NewUser';
import { LoginUser } from '../Shared/Types/LoginUser';
import { Token } from '../Shared/Types/Token';
import { urlAuthPath } from '../Shared/path';

const registerUrl = `${urlAuthPath}/register`;
const loginUrl = `${urlAuthPath}/login`;
const userUrl = `${urlAuthPath}/user`;
const logoutUrl = `${urlAuthPath}/logout`;

export const registerUser = createAsyncThunk(
  'user/register-user',
  async ({ email, password, name }: NewUser) => {
    try {
      const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
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
  async ({ email, password }: LoginUser) => {
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      const result = await response.json();
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

export const authUser = createAsyncThunk(
  'user/auth',
  async ({ token }: Token) => {
    try {
      const response = await fetch(userUrl, {
        headers: {
          authorization: token,
        } as Token,
      });
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
    } catch (error) {
      console.log(error, 'error');
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk('user/logout-user', async () => {
  const response = await fetch(logoutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getCookie('refreshToken') }),
  });
  const result = await response.json();
  return result;
});

export const updateUser = createAsyncThunk(
  'user/update-user',
  async ({ email, name }: User) => {
    const token = getCookie('accessToken');
    const response = await fetch(userUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      } as Token,
      body: JSON.stringify({ email, name }),
    });
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
