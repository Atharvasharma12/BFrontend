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

let initialProducts = {
  productName: "",
  productCategory: "",
  productDescription: "",
  productPrice: "",
  productImg: "",
  sellerId: "",
};

export const usersProduct = createReducer(initialProducts, {
  setUsersProduct: (state, action) => {
    state.productName = action.payload.productName;
    state.productCategory = action.payload.productCategory;
    state.productDescription = action.payload.productDescription;
    state.productPrice = action.payload.productPrice;
    state.productImg = action.payload.productImg;
  },
});

const iAllProducts = {
  products: [],
};

export const allProducts = createReducer(iAllProducts, {
  setAllProduct: (state, action) => {
    state.products = action.payload;
  },
});
