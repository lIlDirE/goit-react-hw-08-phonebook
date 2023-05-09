import { getContactsThunk, loginThunk } from '../../store/thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user.email;
};

// const getFulfilledProfile = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = '';
//   // state.items = payload;
// };

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {

      state.token = "";
      state.user = "";
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      // .addCase(getContactsThunk.fulfilled, getContactsThunk.fulfilled) //getFulfilledProfile
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