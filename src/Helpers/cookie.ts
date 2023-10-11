export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = () => {
  document.cookie = 'isAuth=; path=/; max-age=-1';
  document.cookie = 'accessToken=; path=/; max-age=-1';
  document.cookie = 'refreshToken=; path=/; max-age=-1';
  document.cookie = 'user=; path=/; max-age=-1';
};