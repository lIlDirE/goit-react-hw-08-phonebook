import Layout from './Layout/Layout.jsx';
import LoginPage from './pages/Login.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import { Contacts } from './pages/Contacts.jsx';
import { Route, Routes } from 'react-router-dom';


import { currentUserThunk, getContactsThunk } from 'redux/store/thunk.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { logout } from 'services/contactsApi.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.signup.token);

  useEffect(() => {
    token && 
      dispatch(currentUserThunk(token))
        .unwrap()
        .then(() => {
          dispatch(getContactsThunk(token))
            .unwrap()
  
            .catch(error => {
              if (error.message === 'Unauthorized') {
                toast.error(error.message);
                dispatch(logout());
              } else toast.error(error);
            });
        })
        .catch(error => {
          if (error.message === 'Unauthorized') {
            toast.error(error.message);
            dispatch(logout());
          } else toast.error('Sorry something went wrong try again');
        });
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/signup" element={<RegistrationPage />} />
		<Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </>
  );
}