const ACCESS_TOKEN_KEY = 'basic-token-key';
const REFRESH_TOKEN_KEY = 'refresh-token-key';

export const saveToken = (token: any) => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
  // localStorage.setItem(REFRESH_TOKEN_KEY, token.refreshToken);
};

export const getToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const clearToken = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};
