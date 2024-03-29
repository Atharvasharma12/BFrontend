import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAccount() {
  const navigate = useNavigate();
  const [loginData, serLoginData] = useState({
    userName: "",
    userMail: "",
    userPasswrod: "",
    otp: "",
  });

  const [userOTP, setUserOTP] = useState();

  const handelSubmitForm = () => {
    // e.preventDefault(); //prevent default behavior in case prevent refreshing
    axios
      .post(process.env.REACT_APP_BASE_URL + "/createAccount", loginData)
      .then((response) => {
        // console.log(response.data);
        // alert(response.data);
        toast.info(response.data, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        if (response.data == "Registered Successfully !") navigate("/Login");
      })
      .catch((error) => console.log(error));
  };

  const handleSendOTP = () => {
    if (loginData.userName && loginData.userMail && loginData.userPasswrod) {
      const id = toast.loading("Sending OTP...", {
        closeButton: true,
      });
      axios
        .post(process.env.REACT_APP_BASE_URL + "/sendOTP", loginData)
        .then((response) => {
          toast.update(id, {
            render: response.data,
            type: "success",
            isLoading: false,
            autoClose: 1000,
            hideProgressBar: false,
            closeButton: true,
          });
          // console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      toast.warn("invalid details", {
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
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        <div class="  w-full max-w-sm p-4 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
          <div class="space-y-4">
            <h5 class="text-xl font-medium text-white">Sign up</h5>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your name
              </label>
              <input
                onChange={(e) => {
                  serLoginData({ ...loginData, userName: e.target.value });
                }}
                type="text"
                name="name"
                id="name"
                class="  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="Name"
                required
              />
            </div>
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
            {/* for otp section */}
            <div className="flex gap-3 items-end">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  class="  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="OTP"
                  required
                  onChange={(e) => {
                    serLoginData({ ...loginData, otp: e.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => handleSendOTP()}
                class="w-32 h-10  text-yellow-500 border  hover:text-gray-900 border-yellow-500  hover:bg-yellow-500  focus:outline-none font-medium rounded-lg text-sm  text-center "
              >
                Send OTP
              </button>
            </div>

            <button
              onClick={handelSubmitForm}
              class="w-full text-yellow-500 border  hover:text-gray-900 border-yellow-500  hover:bg-yellow-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Verify
            </button>
            <div class="text-sm font-medium text-gray-300">
              Already registered.
              <Link to="/Login" class="text-yellow-500 hover:underline">
                Login
              </Link>
            </div>
          </div>
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

export default CreateAccount;
