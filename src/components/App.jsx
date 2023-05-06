// import Loader from './Loader/Loader.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/Login.jsx';
import { Contacts } from './pages/Contacts.jsx';
import { currentUserThunk, getContactsThunk } from 'redux/store/thunk.js';
import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from 'redux/selector/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { logout } from 'services/contactsApi.js';



export function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.signup.access_token)

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
              } else toast.error('Sorry something went wrong try again');
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
        <Route path="/signUp" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Contacts />} />		
      </Routes>
    </>
    // <div>
    //   <ContactForm />
    //   <SearchFilter/>
    //   <ContactList/>
    //   {isLoading &&(
    //   <Loader />
    //   )}

    // </div>
  );
}
