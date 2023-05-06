import { getContactsThunk, loginThunk } from '../thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
  user: null
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = '';

  state.access_token = payload.token;
  state.signup = payload
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

export const authReducer = authSlice.reducer;
export const {logOut} = authSlice.actions