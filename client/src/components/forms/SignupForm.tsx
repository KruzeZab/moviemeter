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
import { MODALS } from '../../helpers/constants';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { AuthContext } from '../../context/AuthContext';
import { LoadingButton } from '@mui/lab';

function SignupBanner() {
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
        Create a free account
      </Typography>
    </>
  );
}

function FormFooter() {
  const { openModal } = useContext(ModalContext);

  const handleLoginModal = () => {
    openModal(MODALS.LOGIN_MODAL);
  };

  return (
    <Stack direction="row" justifyContent="center" mt={2}>
      <Typography variant="body2" color="text.secondary" mr={1}>
        Already have an account?
      </Typography>
      <MuiLink
        component="button"
        type="button"
        variant="body2"
        onClick={handleLoginModal}
      >
        Login Here
      </MuiLink>
    </Stack>
  );
}

export interface ISignupValues {
  email: string;
  username: string;
  password: string;
  password2: string;
}

type Fields = keyof ISignupValues;

const initialValues: ISignupValues = {
  email: '',
  username: '',
  password: '',
  password2: '',
};

const SignupForm = () => {
  const [values, setValues] = useState<ISignupValues>(initialValues);
  const [errors, setErrors] = useState<ISignupValues>(initialValues);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');

  const { signupUser } = useContext(AuthContext);
  const { closeModal } = useContext(ModalContext);

  const validateField = (name: Fields) => {
    let errorMsg = '';
    switch (name) {
      case 'email':
        if (!values.email.trim()) {
          errorMsg = 'This field is required';
          break;
        }
        break;
      case 'username':
        if (!values.username.trim()) {
          errorMsg = 'This field is required';
          break;
        }

        if (values.username.trim().length < 3) {
          errorMsg = 'Username must be at least 3 characters';
          break;
        }

        if (values.username.trim().length > 15) {
          errorMsg = 'Username must be less than 16 characters';
          break;
        }

        if (!/^[a-zA-Z0-9@_-]+$/.test(values.username)) {
          errorMsg =
            'Username can only contain letters, numbers, and @ _ -';
          break;
        }
        break;

      case 'password':
        if (!values.password.trim()) {
          errorMsg = 'This field is required';
          break;
        }

        if (values.password.trim().length < 6) {
          errorMsg = 'Password must be at least 6 characters';
          break;
        }
        break;

      case 'password2':
        if (!values.password2.trim()) {
          errorMsg = 'This field is required';
          break;
        }

        if (values.password !== values.password2) {
          errorMsg = 'Passwords do not match';
          break;
        }
        break;
    }

    setErrors((prevError) => ({
      ...prevError,
      [name]: errorMsg,
    }));
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

    const { success, message } = await signupUser(values);
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
        <SignupBanner />
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
            margin="normal"
            fullWidth
            id="singup-email"
            label="Email Address"
            type="email"
            name="email"
            autoFocus
            value={values.email}
            onChange={handleChange}
            onBlur={() => validateField('email')}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            id="singup-username"
            label="Username"
            name="username"
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
            id="signup-password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            onBlur={() => validateField('password')}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="signup-password2"
            autoComplete="current-password"
            value={values.password2}
            onChange={handleChange}
            onBlur={() => validateField('password2')}
            error={!!errors.password2}
            helperText={errors.password2}
          />
          <LoadingButton
            loading={submitting}
            type="submit"
            fullWidth
            color="error"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </LoadingButton>
          <Divider sx={{ my: 1 }} />
          <FormFooter />
        </Box>
      </Box>
    </Container>
  );
};

export default SignupForm;
