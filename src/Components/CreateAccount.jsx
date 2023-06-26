import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [loginData, serLoginData] = useState({
    userName: "",
    userMail: "",
    userPasswrod: "",
  });

  const handelSubmitForm = () => {
    // e.preventDefault(); //prevent default behavior in case prevent refreshing
    axios
      .post("/createAccount", loginData)
      .then((response) => {
        // console.log(response.data);
        alert(response.data);
        if (response.data == "Registered Successfully !") navigate("/Login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div class="  w-full max-w-sm p-4  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
          <div class="space-y-6">
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

            <button
              onClick={handelSubmitForm}
              class="w-full text-yellow-500 border  hover:text-gray-900 border-yellow-500  hover:bg-yellow-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-300">
              Already registered. {"  "}
              <Link to="/Login" class="text-yellow-500 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
