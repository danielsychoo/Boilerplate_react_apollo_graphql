import { ACCESS_TOKEN, REFRESH_TOKEN } from './../constants/auth';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const setAccessToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

export const setRefreshToken = (refreshToken) =>
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
