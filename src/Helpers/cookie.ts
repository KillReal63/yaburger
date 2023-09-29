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


// export const deleteCookie = () => {
//   var cookies = document.cookie.split(";");

//   for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i];
//       var eqPos = cookie.indexOf("=");
//       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//       document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//   }
// }
