import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
  Divider,
  Alert,
} from '@mui/material';
import { Speed as SpeedIcon } from '@mui/icons-material';
import { useContext, useEffect, useRef, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { ModalContext } from '../../context/ModalContext';
import { MODALS } from '../../helpers/constants';
import { AuthContext } from '../../context/AuthContext';

export interface ILoginValues {
  username: string;
  password: string;
}

function LoginBanner() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        color="orangered"
        spacing={0.5}
        mb={1}
      >
        <SpeedIcon />
        <Typography fontWeight="bold" variant="h5" fontSize="21px">
          MovieMeter
        </Typography>
      </Stack>

      <Typography component="h1" fontSize="21px" variant="h5">
        Login to your account
      </Typography>
    </>
  );
}

function FormFooter() {
  const { openModal } = useContext(ModalContext);

  const handleRegisterModal = () => {
    openModal(MODALS.SIGNUP_MODAL);
  };

  return (
    <Stack direction="row" justifyContent="center" mt={2}>
      <Typography variant="body2" color="text.secondary" mr={1}>
        Don't have an account?
      </Typography>
      <MuiLink
        component="button"
        type="button"
        variant="body2"
        onClick={handleRegisterModal}
      >
        Register Here
      </MuiLink>
    </Stack>
  );
}

const initialValues: ILoginValues = {
  username: '',
  password: '',
};

type Fields = keyof ILoginValues;

const LoginForm = () => {
  const [values, setValues] = useState<ILoginValues>(initialValues);
  const [errors, setErrors] = useState<ILoginValues>(initialValues);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');

  const { loginUser } = useContext(AuthContext);
  const { closeModal } = useContext(ModalContext);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    usernameRef?.current?.focus();
  }, []);

  const validateField = (name: Fields) => {
    let errorMsg = '';
    switch (name) {
      case 'username':
        if (!values.username.trim()) {
          errorMsg = 'This field is required';
          break;
        }
        break;

      case 'password':
        if (!values.password.trim()) {
          errorMsg = 'This field is required';
          break;
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = () => {
    for (const field in values) validateField(field as Fields);

    return !Object.values(errors).some((err) => err !== '');
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const valid = validateForm();

    if (!valid) return;

    setSubmitting(true);

    const { success, message } = await loginUser(values);

    if (!success) {
      setSubmitting(false);
      setAlertMsg(message);
    } else {
      setSubmitting(false);
      closeModal();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <LoginBanner />
        {alertMsg && (
          <Alert severity="error" variant="outlined" sx={{ my: 2 }}>
            {alertMsg}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 0.5 }}
        >
          <TextField
            ref={usernameRef}
            margin="normal"
            fullWidth
            id="login-username"
            label="Username"
            name="username"
            autoFocus
            value={values.username}
            onChange={handleChange}
            onBlur={() => validateField('username')}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="login-password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            onBlur={() => validateField('password')}
            error={!!errors.password}
            helperText={errors.password}
          />
          <LoadingButton
            loading={submitting}
            type="submit"
            fullWidth
            color="error"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Divider sx={{ my: 1 }} />
          <FormFooter />
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
