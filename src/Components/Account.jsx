import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cookie from "js-cookie";
import { decodeToken } from "react-jwt";

function Account() {
  const { name, emailId, _id } = useSelector((state) => state.loggedInUser);
  const [userProducts, setUserProducts] = useState([]);
  console.log(emailId);
  const dispatch = useDispatch();
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
  }, []);

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
                    <div className=" sm:m-5 m-2 flex flex-wrap flex-row p-1 items-center justify-evenly max-h-36  bg-gray-100 rounded-md">
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
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
