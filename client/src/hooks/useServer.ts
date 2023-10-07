import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AUTH_STORAGE_KEY } from '../helpers/constants';
import type { JWTUser } from '../context/Auth.types';

const baseURL = 'http://127.0.0.1:8000/api';

const useServer = () => {
  const { authTokens, setUser, setAuthTokens } =
    useContext(AuthContext);

  const server = axios.create({
    baseURL,
  });

  if (authTokens)
    server.defaults.headers.common.Authorization = `Bearer ${authTokens.access}`;

  server.interceptors.request.use(async (req) => {
    const user = authTokens && jwt_decode<JWTUser>(authTokens.access);
    const isExpired = user && dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await server.post(
      `${baseURL}/api/token/refresh/`,
      {
        refresh: authTokens?.refresh,
      }
    );

    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify(response.data)
    );

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return server;
};

export default useServer;
