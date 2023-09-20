import { Token } from './Token';

export type PasswordReset = {
  email?: string;
  password?: string;
  code?: string;
  token?: Token;
};
