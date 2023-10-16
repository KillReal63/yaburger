import {
  registerUser,
  loginUser,
  authUser,
  updateUser,
} from '../../Api/userApi';
import { deleteUser } from './user';
import userSlice from './user';

test('delete user', () => {
  const initialState = {
    name: 'Test',
    email: 'test@example.com',
    password: '123456',
    isAuth: true,
    loading: false,
    error: null,
  };
  const newState = userSlice(initialState, deleteUser());
  const expectedState = {
    name: '',
    email: '',
    password: '',
    isAuth: false,
    loading: false,
    error: null,
  };
  expect(newState).toEqual(expectedState);
});

describe('user reducer', () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isAuth: false,
    loading: false,
    error: null,
  };

  it('fetch register pending', () => {
    const newState = userSlice(initialState, registerUser.pending);
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: true,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch register fulfilled', () => {
    const responseData = {
      user: { name: 'Test2', email: 'test2@example.com' },
    };
    const newState = userSlice(
      initialState,
      registerUser.fulfilled(responseData)
    );
    const expectedState = {
      name: responseData.user.name,
      email: responseData.user.email,
      password: '',
      isAuth: false,
      loading: false,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch register rejected', () => {
    const error = 'Error message';
    const newState = userSlice(initialState, registerUser.rejected(error));
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: false,
      error,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch login pending', () => {
    const newState = userSlice(initialState, loginUser.pending);
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: true,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch login fulfilled', () => {
    const responseData = {
      user: { name: 'Test3', email: 'test3@example.com', password: '123456' },
    };
    const newState = userSlice(initialState, loginUser.fulfilled(responseData));
    const expectedState = {
      name: responseData.user.name,
      email: responseData.user.email,
      password: responseData.user.password,
      isAuth: true,
      loading: false,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch login rejected', () => {
    const error = 'Error message';
    const newState = userSlice(initialState, loginUser.rejected(error));
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: false,
      error,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch auth pending', () => {
    const newState = userSlice(initialState, authUser.pending);
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: true,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch auth rejected', () => {
    const error = 'Error message';
    const newState = userSlice(initialState, authUser.rejected(error));
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: false,
      error,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch update pending', () => {
    const newState = userSlice(initialState, updateUser.pending);
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: true,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch update fulfilled', () => {
    const newState = userSlice(initialState, updateUser.fulfilled());
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: false,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('fetch update rejected', () => {
    const error = 'Error message';
    const newState = userSlice(initialState, updateUser.rejected(error));
    const expectedState = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      loading: false,
      error,
    };
    expect(newState).toEqual(expectedState);
  });
});