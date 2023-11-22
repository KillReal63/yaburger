import { getCookie } from './cookie';

export const accessToken = getCookie('accessToken');

export const refreshToken = getCookie('refreshToken');
