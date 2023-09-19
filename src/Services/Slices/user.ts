import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  authUser,
  updateUser,
} from '../../Api/userApi';
import { getCookie } from '../../Helpers';
import { setLoading, setError } from '../../Helpers/response';

export type userState = typeof initialState;

const initialState = {
  name: '',
  email: '',
  password: '',
  isAuth: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUser(state) {
      state.email = '';
      state.name = '';
      state.password = '';
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, setLoading)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.email = payload.user.email;
        state.name = payload.user.name;
      })
      .addCase(registerUser.rejected, setError)
      .addCase(loginUser.pending, setLoading)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.password = '123456';
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, setError)
      .addCase(authUser.pending, setLoading)
      .addCase(authUser.fulfilled, (state, action) => {
        const { email, name, isAuth } = JSON.parse(getCookie('user') as string);
        state.email = email;
        state.name = name;
        state.password = '123456';
        state.isAuth = isAuth;
        state.loading = false;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loading = false;
        if (state.error !== undefined) {
          action.error.message;
        }
      })
      .addCase(updateUser.pending, setLoading)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateUser.rejected, setError);
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
