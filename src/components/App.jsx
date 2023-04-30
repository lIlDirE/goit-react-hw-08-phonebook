import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchFilter from './ContactForm/SearchFilter/SearchFilter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/store/thunk.js';
import { useEffect } from 'react';
import Loader from './Loader/Loader.js';


export function App() {
	const isLoading = useSelector(state => state.contacts.isLoading);
	const dispatch = useDispatch();
	useEffect(() => {
	  dispatch(getContactsThunk());
	}, [dispatch]);
  

  return (
    <div>
      <ContactForm />
      <SearchFilter/>
      <ContactList/>
	  {isLoading &&(
	  <Loader />
	  )}

    </div>
  );
}
