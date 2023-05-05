import ContactForm from "components/ContactForm/ContactForm";
import SearchFilter from "components/ContactForm/SearchFilter/SearchFilter";
import ContactList from "components/ContactList/ContactList";

export const Contacts = () => {

  return(

	<div>
     <ContactForm />
     <SearchFilter />
     <ContactList />
  </div>
  )
};
