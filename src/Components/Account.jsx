import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cookie from "js-cookie";
import { decodeToken } from "react-jwt";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Account() {
  const { name, emailId, _id } = useSelector((state) => state.loggedInUser);
  const [userProducts, setUserProducts] = useState([]);
  const [test, setTest] = useState(false);
  console.log(emailId);
  const dispatch = useDispatch();

  const handleDelProduct = (productId) => {
    console.log(productId);

    axios
      .delete("/deleteProduct", {
        headers: {
          productId: productId,
        },
      })
      .then((response) => {
        setTest(!test);
        console.log(response);
        toast(response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "success",
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let userCookie = Cookie.get("jwt");

    if (userCookie == undefined) {
      userCookie = "no user found";
      dispatch({
        type: "setCookie",
        payload: userCookie,
      });
    } else {
      dispatch({
        type: "setCookie",
        payload: userCookie,
      });
      let decodedToken = decodeToken(userCookie);
      dispatch({
        type: "setLoggedInUser",
        payload: decodedToken,
      });
      axios
        .post("/account", { userId: _id })
        .then((res) => {
          setUserProducts(res.data);
          console.log("account");
        })
        .catch((err) => console.log(err));
    }
  }, [test]);

  return (
    <>
      <section>
        <div className="flex  justify-center">
          <div className="flex sm:flex-row flex-col items-center text-center mt-10 sm:w-[80%] ">
            <div className="border flex flex-col drop-shadow-xl bg-gray-50 border-gray-300 p-3 w-60  h-max mb-3 rounded-xl sm:mr-5">
              <h6 className="text-xs">Profile details</h6>
              <div className="flex justify-center mt-2">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                  alt="profileimage"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <h6 className="text-xs mt-3 text-gray-600">{emailId}</h6>
                <button class=" sm:w-full mr-2 my-3 bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-gray-900 py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                  Edit Profile
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("jwt");
                    dispatch({
                      type: "setLoggedInUser",
                      payload: { name: "Profile" },
                    });

                    axios
                      .post("/logout", name)
                      .then((response) => {
                        const userCookie = Cookie.get("jwt");
                        dispatch({
                          type: "setCookie",
                          payload: userCookie,
                        });
                        window.alert(response.data);
                      })
                      .catch((error) => console.log(error));
                  }}
                  class="sm:w-full  bg-gray-800 hover:bg-gray-700  text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                >
                  Log out
                </button>
              </div>
            </div>
            <div className="sm:w-full w-96  border m-3 border-gray-200 p-3 rounded-xl">
              <h3>Your active products</h3>
              {userProducts.map((product, id) => {
                return (
                  <>
                    <div className=" sm:m-5 m-2 flex flex-wrap flex-row  p-1 items-center justify-around max-h-36  bg-gray-100 rounded-md">
                      <div className=" h-24  flex m-1 ">
                        <img
                          src={product.productImg}
                          className="h-[100%]"
                          alt=""
                        />
                      </div>
                      <div className="font-bold">
                        <h1>{product.productName}</h1>
                      </div>
                      <div className="text-green-600">
                        <h1>{product.productPrice}</h1>
                      </div>
                      <div className="font-light">
                        <h1>{product.productDescription}</h1>
                      </div>
                      <div
                        onClick={() => {
                          handleDelProduct(product._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer  "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346  9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Account;
