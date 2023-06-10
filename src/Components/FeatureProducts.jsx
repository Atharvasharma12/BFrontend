import React from "react";
import Products from "./Products";

function FeatureProducts() {
  return (
    <>
      <div className="h-fit m-10">
        <h3>Get the latest books from the seller</h3>
        <div className="flex justify-center flex-wrap sm:flex-nowrap p-10">
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </>
  );
}

export default FeatureProducts;
