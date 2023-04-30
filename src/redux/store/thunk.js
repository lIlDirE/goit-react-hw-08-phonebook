import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from 'services/productsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => getContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/addContact', async (data) =>
  addContact(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);