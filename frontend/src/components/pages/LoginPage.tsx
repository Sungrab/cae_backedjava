import { useState, SyntheticEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  useTheme,
} from '@mui/material';
import { UserContextType } from '../../types';
import { UserContext } from '../../contexts/UserContext';
import './index.css';
import { getAuthenticatedUser } from '../../utils/session';

const LoginPage = () => {
  const { loginUser }: UserContextType = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const savedUser = getAuthenticatedUser();
    if (savedUser) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password }, rememberMe);
      navigate('/');
    } catch (err) {
      console.error('LoginPage::error: ', err);
    }
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setUsername(input.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setPassword(input.value);
  };

  const handleRememberMechange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setRememberMe(input.checked);
  };

  return (
    <Box
      sx={{
        margin: 2,
        padding: 3,
        backgroundColor: 'secondary.light',
        borderRadius: 4,
        boxShadow: 2,
      }}
    >
      <h1>Connectez un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameInputChange}
            required
            color="primary"
            sx={{
              input: { color: theme.palette.secondary.contrastText },
            }}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            color="primary"
            sx={{
              input: { color: theme.palette.secondary.contrastText },
            }}
          />
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMechange}
              color="primary"
            />
          }
          label="Se souvenir de moi"
        />
        <Button type="submit" variant="contained" color="primary">
          S'authentifier
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
