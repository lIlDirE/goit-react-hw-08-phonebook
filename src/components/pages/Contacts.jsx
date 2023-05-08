import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/ContactForm/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';
import { Header } from 'components/Header/Header';
// import css from './Home/Home.module.css';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

export const Contacts = () => {
  // const type = useSelector(state => state.signup.type);
  // const token = useSelector(state => state.signup.token);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(type === 'contacts/fetchAll/fulfilled'){
  //     if(token !== null){
  //       console.log(navigate)
  //       navigate('/')
  //     }
  //   }
  // }, [navigate, token, type]);


  return (

      <div >
        <Header />
        <ContactForm />
        <SearchFilter />
        <ContactList />
      </div>

  );
};

// && token !== ""
//className={css.background}