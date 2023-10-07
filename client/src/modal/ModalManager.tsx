import { LoginModal, SignupModal } from '.';
import type { MODAL } from '../context/ModalContext';
import { MODALS } from '../helpers/constants';
import RateModal from './RateModal';

interface ModalManagerProps {
  modal: MODAL;
  closeFn: () => void;
}

const ModalManager = (props: ModalManagerProps) => {
  const { modal, closeFn } = props;

  return (
    <>
      <LoginModal
        closeFn={closeFn}
        open={modal === MODALS.LOGIN_MODAL}
      />

      <SignupModal
        closeFn={closeFn}
        open={modal === MODALS.SIGNUP_MODAL}
      />

      <RateModal
        closeFn={closeFn}
        open={modal === MODALS.RATE_MODAL}
      />
    </>
  );
};

export default ModalManager;
