import React from "react";
import { useSelector } from "react-redux";

function Account() {
  const { name, emailId } = useSelector((state) => state.loggedInUser);

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
                <button class="sm:w-full  bg-gray-800 hover:bg-gray-700  text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
                  Log out
                </button>
              </div>
            </div>
            <div className="sm:w-full w-96 h-96 border m-3 border-gray-200 p-3 rounded-xl">
              <h3>Your active products</h3>
              <div className=" sm:m-5 m-2 flex flex-row p-1 items-center justify-evenly h-20  bg-gray-100 rounded-md">
                <div className=" h-[100%] flex m-1 ">
                  <img src="banner.png" className="h-[100%]" alt="" />
                </div>
                <div className="font-bold">
                  <h1>product name</h1>
                </div>
                <div className="text-green-600">
                  <h1>product price</h1>
                </div>
                <div className="font-light">
                  <h1>product time remaining</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
