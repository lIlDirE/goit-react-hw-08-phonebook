import { deleteContactsThunk } from 'redux/store/thunk';
import { ContactName,ContactLi,ContactNumber,DeleteButtton } from './ContactListElement.styled';
import { useDispatch} from 'react-redux';


const ContactListElement = ({ id, name, number }) => {

	const dispatch = useDispatch();

	return (
	  <ContactLi>
		<ContactName>{name}: </ContactName>
		<ContactNumber>{number}</ContactNumber>
		<DeleteButtton
		  type="button"	
		  onClick={() => {
			dispatch(deleteContactsThunk(id));
		  }}
		>
		  Delete
		</DeleteButtton>
	  </ContactLi>
	);
  };

export default ContactListElement