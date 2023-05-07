import { getContactsThunk } from 'redux/store/thunk';
import ContactListElement from './ContactListElement/ContactListElement';
import { useSelector } from 'react-redux';


const { useEffect } = require("react");
const { useDispatch } = require("react-redux");

const ContactList = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getContactsThunk());
}, [dispatch]);

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.signup.profile);
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListElement id={id} name={name} number={number} key={id} />
      ))}
    </>
  );
};
  

export default ContactList;
