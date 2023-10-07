import * as React from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  Dialog,
  IconButton,
  Slide,
  useMediaQuery,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/material';
import SignupForm from '../../components/forms/SignupForm';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface SignupModalProps {
  closeFn: () => void;
  open: boolean;
}

const SignupModal = (props: SignupModalProps) => {
  const { closeFn, open } = props;
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={smallDevice}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeFn}
      sx={{
        bgcolor: theme.palette.authModalBg,
      }}
      aria-describedby="signup-modal-description"
    >
      <IconButton
        aria-label="close"
        onClick={closeFn}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <SignupForm />
    </Dialog>
  );
};

export default SignupModal;
