import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from '../utils';
import { refreshToken } from '../auth';

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

      const { accessToken, refreshToken } = result;
      document.cookie = `refreshToken=${refreshToken}`;
      document.cookie = `accessToken=${accessToken}`;
      return result;
    } catch (error) {
      console.error();
      throw error;
    }
  }
);

export const getUser = createAsyncThunk('user/get-user', async (token) => {
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
      throw new Error('Нет ответа сети');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error.message === 'jwt expired') {
      try {
        const { accessToken, refreshToken: newRefreshToken } =
          await refreshToken(getCookie('refreshToken'));
        document.cookie = `refreshToken=${newRefreshToken};`;
        document.cookie = `accessToken=${accessToken};`;
      } catch (err) {
        return console.error('Token failed');
      }
      return;
    }
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
    addUser(state, { payload }) {
      state.user = [...state.user, payload];
    },
    deleteUser(state, { payload }) {
      state.email = '';
      state.name = '';
      state.password = '';
      state.isAuth = false;
    },
    updateUser(state, { payload }) {
      state.email = payload.user.email;
      state.name = payload.user.name;
      state.password = payload.user.password;
    }
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
      });
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
