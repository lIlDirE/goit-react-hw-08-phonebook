import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    filterContact: (state, { payload }) => (state = payload),
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


