import axios from 'axios';
axios.defaults.baseURL = 'https://6443cb85466f7c2b4b5a745a.mockapi.io';

export const getContacts = async () => {
	try {
	  const response = await axios.get('/contacts/contacts');
	  return response.data;
	} catch (error) {
	  return Promise.reject(error.message);
	}
  };

export const addContact = async contact => {
	try {
	  const response = await axios.post('/contacts/contacts', contact);
	  return response.data;
	} catch (error) {
	  return Promise.reject(error.message);
	}
  };

export const deleteContact = async contactId => {
	try {
	  const response = await axios.delete(`/contacts/contacts/${contactId}`);
	  return response.data;
	} catch (error) {
	  return Promise.reject(error.message);
	}
  };