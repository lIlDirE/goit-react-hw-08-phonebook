// import Loader from './Loader/Loader.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/Login.jsx';
import { Contacts } from './pages/Contacts.jsx';

export function App() {
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
