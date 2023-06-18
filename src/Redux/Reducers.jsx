import { createReducer } from "@reduxjs/toolkit";

const initialLoggedInUser = {
  name: "Profile",
  emailId: "email id",
};

export const loggedInUser = createReducer(initialLoggedInUser, {
  setLoggedInUser: (state, action) => {
    state.name = action.payload.name;
    state.name = action.payload.emailId;
  },
});
