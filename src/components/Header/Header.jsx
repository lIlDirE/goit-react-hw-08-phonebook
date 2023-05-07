import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/allSlice/authSlice/authSlice';
import { dellToken } from 'services/contactsApi';
import { useNavigate } from 'react-router-dom';
import {
  AppContainer,
  AppLogoutContainer,
  AppMainContainer,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.signup.token);
  const userName = useSelector(state => state.signup.user);

  const handleLogOut = () => {
    dispatch(logOut());
    dellToken();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <AppMainContainer>
        <AppContainer>
          <StyledNavLink to="/">
            Home
          </StyledNavLink>
		  {token && (
          <StyledNavLink to="/contacts">
		  Contacts
		</StyledNavLink>
		  )}

        </AppContainer>

        <AppLogoutContainer>

          {token !== null && (
            <>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleLogOut}>
                  Logout
                </Button>
              </Stack>
              <h3>{userName}</h3>
            </>
          ) 
		}
        </AppLogoutContainer>
      </AppMainContainer>
    </AppBar>
  )
};
