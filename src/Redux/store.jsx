import { configureStore } from "@reduxjs/toolkit";
import { loggedInUser, usersProduct, allProducts } from "./Reducers";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    usersProduct: usersProduct,
    allProducts: allProducts,
  },
});

export default store;
