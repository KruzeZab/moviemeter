import { createContext, useState } from 'react';
import ModalManager from '../modal/ModalManager';
import { MODALS } from '../helpers/constants';

export type MODAL =
  | 'LOGIN_MODAL'
  | 'SIGNUP_MODAL'
  | 'RATE_MODAL'
  | '';

export const ModalContext = createContext({
  openModal: (_: MODAL) => {},
  closeModal: () => {},
});

const ModalProvider = (props: any) => {
  const [modal, setModal] = useState<MODAL>(MODALS.NONE);

  const openModal = (newModal: MODAL) => {
    setModal(newModal);
  };

  const closeModal = () => {
    setModal(MODALS.NONE);
  };

  const contextValue = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
      <ModalManager modal={modal} closeFn={closeModal} />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
