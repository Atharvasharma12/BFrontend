import React from "react";

function Products() {
  return (
    <div>
      <div>
        <div className="m-4">
          <div class=" w-72 bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700 hover:scale-105 ease-in duration-150 ">
            <a href="@" className="flex justify-center bg-white rounded-lg">
              <img
                className="p-1 rounded-t-lg h-60"
                src="book5.png"
                alt="productimage"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="@">
                <h5 class="text-xl font-semibold tracking-tight text-white text-left">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-white">Rs.599</span>
                <a
                  href="@"
                  class="my-2  bg-yellow-500 hover:bg-transparent text-black-500 font-semibold hover:text-yellow-500 py-2 px-4 border border-yellow-500 hover:border-yellow-500 rounded "
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
