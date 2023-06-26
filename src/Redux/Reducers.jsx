import { createReducer } from "@reduxjs/toolkit";

const initialLoggedInUser = {
  name: "Profile",
  emailId: "email id",
  _id: "",
};

export const loggedInUser = createReducer(initialLoggedInUser, {
  setLoggedInUser: (state, action) => {
    state.name = action.payload.name;
    state.emailId = action.payload.email;
    state._id = action.payload._id;
  },
});
