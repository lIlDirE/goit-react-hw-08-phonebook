import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from 'redux/store/initial';
import {
  getContactsThunk,
  createContactThunk,
  deleteContactsThunk,
} from 'redux/store/thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = [...payload];
};

const handleFulfilledAdd = (state, { payload }) => {
	state.items = [...state.items, payload];
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          createContactThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          createContactThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactsSlice.reducer;

export const { addContact, removeContact } = contactsSlice.actions;