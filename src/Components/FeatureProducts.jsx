import React from "react";
import Products from "./Products";

function FeatureProducts() {
  return (
    <>
      <div className="h-fit m-10 flex justify-center flex-col text-center">
        <h1 className="text-3xl font-semibold">
          Get the latest books from the seller
        </h1>
        <div className="flex justify-center flex-wrap sm:flex-nowrap p-10 ">
          <Products />
          <Products />
          <Products />
        </div>
        <h5>Find out more</h5>
      </div>
    </>
  );
}

export default FeatureProducts;
