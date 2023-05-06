import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, currentUser, deleteContact, getContacts, login, logout, signup } from 'services/contactsApi';


export const signupThunk = createAsyncThunk('user/signup', async contact =>
  signup(contact)
);

export const loginThunk = createAsyncThunk('user/login', async contact =>
  login(contact)
);

export const logoutThunk = createAsyncThunk('user/logout', async contact =>
  logout(contact)
);

export const currentUserThunk = createAsyncThunk(
  'user/currentUser',
  async contact => currentUser(contact)
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => addContact(contact)
);

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async contact => getContacts(contact)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => deleteContact(contactId)
);