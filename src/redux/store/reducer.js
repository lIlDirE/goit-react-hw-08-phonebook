import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from 'redux/contactSlice/contactSlice';
import { filterReducer } from 'redux/filterSlice/filterSlice';


export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
