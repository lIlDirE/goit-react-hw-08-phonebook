// import ContactForm from './ContactForm/ContactForm.jsx';
// import ContactList from './ContactList/ContactList.jsx';
// import SearchFilter from './ContactForm/SearchFilter/SearchFilter.jsx';
// import Loader from './Loader/Loader.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/Login.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
// import { useSelector } from 'react-redux';

export function App() {
//   const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/signUp" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactForm />} />		
  
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
