import { PasswordReset } from '../Shared/Types/PasswordReset';

export const forgotPassword = ({ email }: PasswordReset) => {
  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
};

export const resetPassword = ({ password, code: token }: PasswordReset) => {
  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then((res) => res.json());
};
