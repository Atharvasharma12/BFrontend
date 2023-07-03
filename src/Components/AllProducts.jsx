import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AllProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allProducts);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const gettingItems = () => {
      axios
        .get("/allProducts")
        .then((res) => {
          setItems(res.data);
          dispatch({
            type: "setAllProduct",
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    };
    gettingItems();
  }, [dispatch]);

  const handleOnPurchase = (item) => {
    dispatch({
      type: "setUsersProduct",
      payload: item,
    });
  };

  return (
    <>
      <section>
        <div>
          {/* searching elements */}
          <form className="m-10">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm border  rounded-lg outline-none  bg-white border-gray-400  "
                placeholder="Search "
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-gray-900 hover:bg-gray-700 focus:ring-gray-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center flex-row flex-wrap">
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
                        src={item.productImg}
                        alt="productimage"
                      />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="@">
                        <h5 className="text-xl font-semibold tracking-tight text-white text-left">
                          {item.productName}
                        </h5>
                      </a>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-white">
                          Rs.{item.productPrice}
                        </span>
                        <Link
                          onClick={() => handleOnPurchase(item)}
                          to="/SelectedProduct"
                          className="my-2  bg-yellow-500 hover:bg-transparent text-black-500 font-semibold hover:text-yellow-500 py-2 px-4 border border-yellow-500 hover:border-yellow-500 rounded "
                        >
                          Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AllProducts;
