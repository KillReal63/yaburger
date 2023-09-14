import { User } from "../Shared/Types/User";
import { Token } from "../Shared/Types/Token";

export const forgotPassword = (email: User) => {
  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
};

export const resetPassword = (password: User, token: Token) => {
  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then((res) => res.json());
};
