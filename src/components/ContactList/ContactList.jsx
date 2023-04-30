import ContactListElement from './ContactListElement/ContactListElement';
import { useSelector } from 'react-redux';

const ContactList = () => {



  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);
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
