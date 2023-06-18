import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

function FeatureProducts() {
  return (
    <>
      <div className="h-fit m-10 flex justify-center flex-col text-center">
        <h1 className="text-3xl font-semibold">
          Get the latest books from the seller
        </h1>
        <div className="flex justify-center p-10 ">
          <div>
            <Products />
          </div>
        </div>
        <Link to="AllProducts">
          <h5 className="hover:text-yellow-500 underline">Find out more</h5>
        </Link>
      </div>
    </>
  );
}

export default FeatureProducts;
