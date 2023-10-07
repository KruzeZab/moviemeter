import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import { AUTH_STORAGE_KEY } from '../helpers/constants';
import { ILoginValues } from '../components/forms/LoginForm';
import type {
  AuthContextType,
  IAuthResponse,
  IAuthTokens,
  JWTUser,
} from './Auth.types';
import useServer from '../hooks/useServer';
import { ISignupValues } from '../components/forms/SignupForm';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  authTokens: null,
  setAuthTokens: () => {},
  setUser: () => {},
  loginUser: async () => ({
    success: false,
    message: '',
  }),
  signupUser: async () => ({
    success: false,
    message: '',
  }),
  logoutUser: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const getAuthTokens = () => {
  const storedTokens = localStorage.getItem(AUTH_STORAGE_KEY);
  return storedTokens ? JSON.parse(storedTokens) : null;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authTokens, setAuthTokens] = useState<IAuthTokens | null>(
    () => getAuthTokens()
  );
  const [user, setUser] = useState<JWTUser | null>(() => {
    const tokens = getAuthTokens();
    return tokens ? jwt_decode<JWTUser>(tokens.access) : null;
  });

  const server = useServer();

  const [loading, setLoading] = useState<boolean>(true);

  const loginUser = async (formValues: ILoginValues) => {
    const result: IAuthResponse = {
      success: false,
      message: '',
    };
    try {
      const response = await server.post<IAuthTokens>(
        '/user/token/',
        formValues
      );

      setAuthTokens(response.data);
      setUser(jwt_decode<JWTUser>(response.data.access));
      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      result.success = true;
      result.message = 'Login successful';
    } catch (error: any) {
      result.success = false;
      result.message = error.response.data.detail;
    }
    return result;
  };

  const signupUser = async (formValues: ISignupValues) => {
    const result: IAuthResponse = {
      success: false,
      message: '',
    };

    try {
      const response = await server.post('/user/signup/', formValues);

      setAuthTokens(response.data);
      setUser(jwt_decode<JWTUser>(response.data.access));
      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      result.success = true;
      result.message = 'Signup successful';
    } catch (error: any) {
      result.success = false;
      result.message = error.response.data.detail;
    }
    return result;
  };

  const logoutUser = (): void => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const contextData: AuthContextType = {
    user,
    authTokens,
    setAuthTokens,
    setUser,
    loginUser,
    signupUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode<JWTUser>(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
