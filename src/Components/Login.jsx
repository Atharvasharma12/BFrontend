import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { decodeToken } from "react-jwt";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, serLoginData] = useState({
    userMail: "",
    userPasswrod: "",
  });

  const handelSubmitForm = (e) => {
    e.preventDefault(); //prevent default behavior in case prevent refreshing

    axios
      .post(process.env.REACT_APP_BASE_URL + "/userLogin", loginData)
      .then((response) => {
        dispatch({
          type: "setLoggedInUser",
          payload: response.data,
        });

        if (response.data.message == "login successfull !") {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          Cookie.set("jwt", response.data.token);
          // const userCookie = Cookie.get("jwt");
          const userCookie = Cookie.get("jwt");
          localStorage.setItem("jwt", userCookie);
          dispatch({
            type: "setCookie",
            payload: response.data.token,
          });

          Navigate("/");
        } else {
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center mt-10  ">
        <div class="  w-full max-w-sm p-4 shadow-xl rounded-lg  sm:p-6 md:p-8 bg-gray-800 border-gray-700">
          <form class="space-y-6" onSubmit={handelSubmitForm}>
            <h5 class="text-xl font-medium text-white">Sign in</h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                onChange={(e) => {
                  serLoginData({ ...loginData, userMail: e.target.value });
                }}
                type="email"
                name="email"
                id="email"
                class="  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="username@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <input
                onChange={(e) => {
                  serLoginData({
                    ...loginData,
                    userPasswrod: e.target.value,
                  });
                }}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                required
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border  rounded  focus:ring-3  bg-gray-700 border-gray-600 focus:ring-yellow-500 ring-offset-gray-800 focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="@" class="ml-auto text-sm text-yellow-500">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-yellow-500 border  hover:text-gray-900 border-yellow-500  hover:bg-yellow-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-300">
              Not registered ?{"  "}
              <Link to="/CreateAccount" class="text-yellow-500 hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
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

export default Login;
