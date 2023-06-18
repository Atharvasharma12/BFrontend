import React from "react";

import { productDetails } from "./ProductList";

function Products() {
  const items = productDetails;

  return (
    <div>
      <div>
        {items.map((item, id) => {
          return (
            <>
              <div className="m-4" key={id}>
                <div className=" w-72 bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700 hover:scale-105 ease-in duration-150 ">
                  <a
                    href="@"
                    className="flex justify-center bg-white rounded-lg"
                  >
                    <img
                      className="p-1 rounded-t-lg h-60"
                      src={item.img}
                      alt="productimage"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="@">
                      <h5 className="text-xl font-semibold tracking-tight text-white text-left">
                        {item.name}
                      </h5>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-white">
                        Rs.{item.price}
                      </span>
                      <a
                        href="@"
                        className="my-2  bg-yellow-500 hover:bg-transparent text-black-500 font-semibold hover:text-yellow-500 py-2 px-4 border border-yellow-500 hover:border-yellow-500 rounded "
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
