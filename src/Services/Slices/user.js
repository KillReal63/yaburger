import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  authUser,
  updateUser,
} from '../../Api/userApi';
import { getCookie } from '../../Helpers';

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
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
