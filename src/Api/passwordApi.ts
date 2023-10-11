import { PasswordReset } from '../Shared/Types/PasswordReset';
import { urlPath } from '../Shared/path';

const url = `${urlPath}/password-reset`;
const resetUrl = `${urlPath}/password-reset/reset`;

export const forgotPassword = ({ email }: PasswordReset) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
};

export const resetPassword = ({ password, code: token }: PasswordReset) => {
  fetch(resetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then((res) => res.json());
};
