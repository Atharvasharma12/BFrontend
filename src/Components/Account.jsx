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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleDelProduct = (productId) => {
    console.log(productId);

    axios
      .delete(process.env.REACT_APP_BASE_URL + "/deleteProduct", {
        headers: {
          productId: productId,
        },
      })
      .then((response) => {
        setTest(!test);
        toast(response.data, {
          position: "top-center",
          autoClose: 1000,
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
    let userCookie = localStorage.getItem("jwt");

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
        .post(
          process.env.REACT_APP_BASE_URL + "/account",

          { userId: _id },
          {
            headers: {
              jwt: userCookie,
            },
          }
        )
        .then((res) => {
          setLoading(false);
          setUserProducts(res.data);
        })
        .catch((err) => console.log(err));
    }
    console.log("hitt");
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
                      .post(process.env.REACT_APP_BASE_URL + "/logout", name)
                      .then((response) => {
                        Cookie.remove("jwt");
                        const userCookie = Cookie.get("jwt");
                        // console.log(userCookie);
                        dispatch({
                          type: "setCookie",
                          payload: userCookie,
                        });

                        toast.success(response.data, {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
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

              {loading ? (
                <div role="status" className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                userProducts.map((product, id) => {
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
                        <div className="font-light">
                          <h1>{product.productDescription}</h1>
                        </div>
                        <div className="text-green-600">
                          <h1>Rs.{product.productPrice}/-</h1>
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
                            className="w-6 h-6 cursor-pointer hover:scale-110 "
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
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
