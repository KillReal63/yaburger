export const forgotPassword = (email) => {
  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
};

export const resetPassword = (password, token) => {
  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then((res) => res.json());
};

  export const getRefreshToken = (oldRefreshToken) =>
  fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: oldRefreshToken }),
  }).then((res) => res.json());