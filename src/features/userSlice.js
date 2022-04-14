import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    removeUser: (state, action) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, removeUser } =
  cartSlice.actions;
export default cartSlice.reducer;
