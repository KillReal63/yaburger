import { Token } from "../Shared/Types/Token";

export const getRefreshToken = (oldRefreshToken: Token) =>
  fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: oldRefreshToken }),
  }).then((res) => res.json());