import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [profileToggleSm, setProfileToggleSm] = useState(false);
  let profileRef = useRef();
  let toggleRef = useRef();
  let profileSmRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setProfileToggle(false);
      }
      if (!toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
      if (!profileSmRef.current.contains(e.target)) {
        setProfileToggleSm(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const { name } = useSelector((state) => state.loggedInUser);

  return (
    <>
      <div className="bg-gray-900 h-14 flex justify-around items-center ">
        <div>
          <Link to="/">
            <h2 className=" text-white text-3xl font-bold cursor-pointer ">
              Boekenza.
            </h2>
          </Link>
        </div>
        <div className="text-white  items-center cursor-pointer hidden sm:flex ">
          <ul className=" gap-5 flex items-center ">
            <Link to="/">
              <li className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-gray-900 py-2 px-4 hover:border-transparent rounded">
                Home
              </li>
            </Link>
            <Link to="About">
              <li className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-gray-900 py-2 px-4   hover:border-transparent rounded">
                About
              </li>
            </Link>
            <li className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-gray-900 py-2 px-4   hover:border-transparent rounded">
              Contact
            </li>
            <div className="flex gap-2 content-center item-center ml-1">
              <img
                onClick={() => setProfileToggleSm((prev) => !prev)}
                className="inline-block h-10 w-10 rounded-full ring-3 ring-white items-center "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                alt=""
              />

              <div
                className={`${
                  profileToggleSm ? "block" : "hidden"
                } w-56 absolute 
                top-14 right-10 max-w-sm bg-white border z-20 border-gray-200 rounded-lg drop-shadow-xl cursor-default`}
              >
                <div
                  className="flex flex-col items-center pb-5 pt-5 "
                  ref={profileSmRef}
                >
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                    alt="profileimage"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    {name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Student
                  </span>
                  <div
                    className="flex mt-4 space-x-3 md:mt-6"
                    onClick={() => setProfileToggleSm((prev) => !prev)}
                  >
                    <Link
                      to="./Login"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:text-white hover:bg-gray-900  "
                      onClick={() => {
                        dispatch({
                          type: "setLoggedInUser",
                          payload: { name: "Profile" },
                        });
                      }}
                    >
                      {name == "Profile" ? "login" : "logout"}
                    </Link>
                    <Link
                      to="Account"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-solid border-2 rounded-lg  "
                    >
                      Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        {/* for mobile */}
        <div className="text-white sm:hidden flex items-center gap-4">
          <div className="flex gap-2 content-center item-center ml-1  ">
            <img
              onClick={() => setProfileToggle((prev) => !prev)}
              className="inline-block h-10 w-10 rounded-full ring-3 ring-white items-center "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
              alt=""
            />
            <div
              className={`${
                profileToggle ? "block" : "hidden"
              } w-56 absolute ease-in-out duration-100
                top-14 right-10 max-w-sm bg-white border z-20 border-gray-200 rounded-lg shadow-black cursor-default`}
            >
              <div className="flex flex-col items-center pb-5 pt-5">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                  alt="profileimage"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  {name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Student
                </span>
                <div
                  ref={profileRef}
                  className="flex mt-4 space-x-3 md:mt-6"
                  onClick={() => setProfileToggle((prev) => !prev)}
                >
                  <Link
                    to="./Login"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:text-white hover:bg-gray-900  "
                    onClick={() => {
                      dispatch({
                        type: "setLoggedInUser",
                        payload: { name: "Profile" },
                      });
                    }}
                  >
                    {name == "Profile" ? "login" : "logout"}
                  </Link>
                  <Link
                    to="Account"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-solid border-2 rounded-lg  "
                  >
                    Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
          <div
            ref={toggleRef}
            className={`${toggle ? "flex" : "hidden"}
           absolute p-6 bg-yellow-500 border border-yellow-700 drop-shadow-xl text-black right-0 mx-4 my-2 top-16  flex rounded-xl sidebar min-w-[140px] z-10
          `}
          >
            <ul
              className="flex flex-col items-center flex-1"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            >
              <Link to="/">
                <li className="mb-4">Home</li>
              </Link>
              <Link to="About">
                <li className="mb-4">About</li>
              </Link>
              <li className="mb-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
