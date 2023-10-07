import { MODAL } from '../context/ModalContext';

interface IModals {
  [key: string]: MODAL;
}

export const MODALS: IModals = {
  LOGIN_MODAL: 'LOGIN_MODAL',
  SIGNUP_MODAL: 'SIGNUP_MODAL',
  RATE_MODAL: 'RATE_MODAL',
  NONE: '',
};

export const AUTH_STORAGE_KEY = 'accessTokens';
