import { loginThunk } from "../thunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    access_token: '',
    isLoading: false,
    error: ''
}

const handlePending = (state, {payload}) => {
    state.isLoading = true
}

const handleFulfilled = (state, {payload}) => {
    state.isLoading = false
    state.error = ''
    state.access_token = payload.access_token
}
const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.error = ''
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, handlePending)
        builder.addCase(loginThunk.fulfilled, handleFulfilled)
        builder.addCase(loginThunk.rejected, handleRejected)
    }
})

export const authReducer = authSlice.reducer