import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from '../utils';
import { getRefreshToken } from '../auth';

export const registerUser = createAsyncThunk(
  'user/register-user',
  async ({ email, password, name }) => {
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
  async ({ email, password }) => {
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

export const authUser = createAsyncThunk('user/auth', async (token) => {
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
        oldRefreshToken
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
    `https://norma.nomoreparties.space/api/auth/logout`,
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    isAuth: false,
    loading: false,
    error: null,
  },
  reducers: {
    deleteUser(state, action) {
      state.email = '';
      state.name = '';
      state.password = '';
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.email = payload.user.email;
        state.name = payload.user.name;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.password = '123456';
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        const { email, name, isAuth } = JSON.parse(getCookie('user'));
        state.email = email;
        state.name = name;
        state.password = '123456';
        state.isAuth = isAuth;
        state.loading = false;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
