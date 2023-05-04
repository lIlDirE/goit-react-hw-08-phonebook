import { getContactsThunk, loginThunk } from '../thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = payload.token;
};

const getFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload.data;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.profile = null;
      state.access_token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.fulfilled, getFulfilledProfile)
      .addMatcher(
        isAnyOf(loginThunk.pending, getContactsThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getContactsThunk.rejected),
        handleRejected
      );
  },
});
console.log(authSlice);
export const authReducer = authSlice.reducer;
export const {logOut} = authSlice.actions