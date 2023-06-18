import { configureStore } from "@reduxjs/toolkit";
import { loggedInUser } from "./Reducers";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUser,
  },
});

export default store;
