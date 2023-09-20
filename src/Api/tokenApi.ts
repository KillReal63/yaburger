import { Token } from '../Shared/Types/Token';
import { urlAuthPath } from '../Shared/path';

const url = `${urlAuthPath}/token`;

export const getRefreshToken = (oldRefreshToken: Token) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: oldRefreshToken }),
  }).then((res) => res.json());
