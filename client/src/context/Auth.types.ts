import type { Dispatch, SetStateAction } from 'react';
import { ILoginValues } from '../components/forms/LoginForm';
import { ISignupValues } from '../components/forms/SignupForm';

export interface JWTUser {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: string;
  username: string;
}

export interface IAuthTokens {
  access: string;
  refresh: string;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
}

export interface AuthContextType {
  user: JWTUser | null;
  authTokens: IAuthTokens | null;
  setAuthTokens: Dispatch<SetStateAction<IAuthTokens | null>>;
  setUser: Dispatch<SetStateAction<JWTUser | null>>;
  loginUser: (formValues: ILoginValues) => Promise<IAuthResponse>;
  signupUser: (formValues: ISignupValues) => Promise<IAuthResponse>;
  logoutUser: () => void;
}
