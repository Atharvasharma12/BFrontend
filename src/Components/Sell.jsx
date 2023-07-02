import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Sell() {
  const { name, emailId, _id } = useSelector((state) => state.loggedInUser);

  const [productDetail, setProductDetail] = useState({
    productName: "",
    productCategory: "",
    productDescription: "",
    productPrice: "",
    productImg: "",
    seller: name,
    sellerId: _id,
    SellerEmail: emailId,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(productDetail);
    axios
      .post("/uploadProduct", productDetail)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex justify-center mt-10  ">
        <div class="  w-full max-w-sm p-4 shadow-xl rounded-lg  sm:p-6 md:p-8 bg-gray-800 border-gray-700">
          <form class="space-y-6" onSubmit={handelSubmit}>
            <h5 class="text-xl font-medium text-white">Upload product</h5>
            <div>
              <label
                for="productName"
                class="block mb-2 text-sm font-medium text-white"
              >
                Product name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                class="  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="harry potter"
                required
                onChange={(e) => {
                  setProductDetail({
                    ...productDetail,
                    productName: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label
                for="productDescription"
                class="block mb-2 text-sm font-medium text-white"
              >
                Description
              </label>
              <input
                type="text"
                name="productDescription"
                id="productDescription"
                placeholder="Description"
                class="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                required
                onChange={(e) => {
                  setProductDetail({
                    ...productDetail,
                    productDescription: e.target.value,
                  });
                }}
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5 mb-3 mt-4 ">
                  <div className="flex flex-row align-middle ">
                    <div className="mr-2">
                      <label
                        for="productCategory"
                        class="mt-2 mb-2 text-sm font-medium text-white block"
                      >
                        Category
                      </label>
                      <select
                        required
                        name="Category"
                        id="Category"
                        className="rounded-lg p-1 border mb-2 text-white bg-gray-700 border-gray-500  focus:ring-3  focus:ring-yellow-500 ring-offset-gray-800 focus:ring-offset-gray-800"
                        onChange={(e) => {
                          setProductDetail({
                            ...productDetail,
                            productCategory: e.target.value,
                          });
                        }}
                      >
                        <option value="" selected>
                          Cartegory
                        </option>
                        <option value="Novel">Novel</option>
                        <option value="Civil">Civil</option>
                        <option value="Engineering drwaing">
                          Engineering drwaing
                        </option>
                        <option value="CS">CS</option>
                      </select>
                    </div>
                    <div>
                      <div>
                        <label
                          for="productPrice"
                          class="mt-2 mb-2 text-sm font-medium text-white block"
                        >
                          Price{" "}
                        </label>
                        <input
                          type="number"
                          name="productPrice"
                          id="productPrice"
                          placeholder=""
                          className="rounded-lg border p-1 w-full mb-2 text-white placeholder-gray-400 bg-gray-700 border-gray-500  focus:ring-3  focus:ring-yellow-500 ring-offset-gray-800 focus:ring-offset-gray-800"
                          required
                          onChange={(e) => {
                            setProductDetail({
                              ...productDetail,
                              productPrice: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <input
                type="file"
                className="rounded-lg p-1 w-full  text-white  border border-gray-500  focus:ring-3  focus:ring-yellow-500 ring-offset-gray-800 focus:ring-offset-gray-800"
              />
            </div>
            <button
              type="submit"
              class="w-full text-yellow-500 border  hover:text-gray-900 border-yellow-500  hover:bg-yellow-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sell;
