import ContactForm from "components/ContactForm/ContactForm";
import SearchFilter from "components/ContactForm/SearchFilter/SearchFilter";
import ContactList from "components/ContactList/ContactList";
import { Header } from "components/ContactList/Header/Header";

export const Contacts = () => {

  return(

	<div>
    <Header/>
     <ContactForm />
     <SearchFilter />
     <ContactList />
  </div>
  )
};
