import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SelectedProduct() {
  // const Navigate = useNavigate();

  const {
    productName,
    productCategory,
    productDescription,
    productPrice,
    productImg,
    sellerId,
  } = useSelector((state) => state.usersProduct);

  const { emailId, name } = useSelector((state) => state.loggedInUser);

  const handleInform = () => {
    console.log("hello");
    const id = toast.loading("Reaching seller...", {
      closeButton: true,
    });

    let userCookie = Cookie.get("jwt");

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "/sendMailerToSeller",
        {
          productName,
          productCategory,
          productDescription,
          productPrice,
          productImg,
          sellerId,
          emailId,
          name,
        },
        {
          headers: {
            jwt: userCookie,
          },
        }
      )
      .then((response) => {
        toast.update(id, {
          render: response.data,
          type: "success",
          isLoading: false,
          autoClose: 1000,
          hideProgressBar: false,
          closeButton: true,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.update(id, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
          hideProgressBar: false,
          closeButton: true,
        });
      });
  };

  // useEffect(() => {
  //   productName ? Navigate() : Navigate("/AllProducts");
  // }, [productName, Navigate]);

  return (
    <>
      <section className="flex justify-center">
        <div className="w-{30 rem} flex-wrap border-yellow-500 drop-shadow-lg bg-slate-50 m-5 p-2 border border-3 h-max rounded-lg flex flex-row justify-center ">
          <div className=" flex justify-center sm:mr-3 mr-0 w-40">
            <img src={productImg} alt="product" />
          </div>
          <div className="flex flex-col">
            <div className="sm:text-3xl text-2xl font-semibold">
              <h4>{productName}</h4>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-600 font-thin mt-2">
                {productCategory}
              </span>
              <span className="mt-5">{productDescription}</span>
              <div className="flex flex-col">
                <span className="text-xl text-green-600">{productPrice}</span>
                <button
                  onClick={() => handleInform()}
                  className="my-2  bg-gray-900 hover:bg-gray-950 text-white font-semibold py-2 px-4 border   rounded "
                >
                  Inform Seller
                </button>
              </div>
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

export default SelectedProduct;
