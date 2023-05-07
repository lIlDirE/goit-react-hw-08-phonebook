import ContactListElement from './ContactListElement/ContactListElement';
import { useSelector } from 'react-redux';

const ContactList = () => {

  const allStates = useSelector(state => state.items)
  console.log(allStates);
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.signup.profile);
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListElement id={id} name={name} number={number} key={id} />
      ))}
    </>
  );
};
  

export default ContactList;
