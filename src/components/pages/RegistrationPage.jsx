import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from 'services/contactsApi';
import { toast } from 'react-toastify';
import { Header } from 'components/Header/Header';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import background from '../../img/background.jpg';

const RegistrationPage = () => {
  const theme = createTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    signup(newUser)
      .then(() => {
        toast.success('User created');
        navigate('/login');
      })
      .catch(error => toast.error(error));
  };

  return (
    <>
      <Header />
      {/* <div>
      <h1>Registartion</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <br />

        <button type="submit">SIGNUP</button>
      </form>
    </div> */}

      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={username}
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={event => setUsername(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={event => setEmail(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={event => setPassword(event.target.value)}
                />

                <Button
                  type="submit"
                  onSubmit={handleSubmit}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default RegistrationPage;
