import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from 'redux/allSlice/contactSlice/contactSlice';
import { filterReducer } from 'redux/allSlice/filterSlice/filterSlice';
import { authReducer } from '../allSlice/authSlice/authSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});
