import { configureStore } from "@reduxjs/toolkit";
import { loggedInUser, usersProduct, cookie, allProducts } from "./Reducers";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    usersProduct: usersProduct,
    allProducts: allProducts,
    cookie: cookie,
  },
});

export default store;
