import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-gray-900 h-14 flex justify-around items-center">
        <div>
          <h2 className=" text-white text-3xl font-bold cursor-pointer ">
            Boekenza.
          </h2>
        </div>
        <div className="text-white  items-center cursor-pointer hidden sm:flex ">
          <ul className=" gap-5 flex items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <div className="flex gap-2 content-center item-center ml-1">
              <img
                class="inline-block h-10 w-10 rounded-full ring-3 ring-white items-center "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                alt=""
              />
            </div>
          </ul>
        </div>
        <div className="text-white sm:hidden flex items-center gap-4">
          <div className="flex gap-2 content-center item-center ml-1">
            <img
              class="inline-block h-10 w-10 rounded-full ring-3 ring-white items-center "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
              alt=""
            />
          </div>
          <h4
            className="cursor-pointer"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            Menu
          </h4>
          <div
            className={`${toggle ? "flex" : "hidden"}
           absolute p-6 bg-gray-900 right-0 mx-4 my-2 top-20 flex rounded-xl sidebar min-w-[140px]
          `}
          >
            <ul className="flex flex-col items-center flex-1">
              <li className="mb-4">Home</li>
              <li className="mb-4">About</li>
              <li className="mb-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
