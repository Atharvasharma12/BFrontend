import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SelectedProduct() {
  const Navigate = useNavigate();

  const {
    productName,
    productCategory,
    productDescription,
    productPrice,
    productImg,
    sellerId,
  } = useSelector((state) => state.usersProduct);
  useEffect(() => {
    productName ? Navigate() : Navigate("/AllProducts");
    console.log("routed");
  }, [productName]);

  return (
    <>
      <section className="flex justify-center">
        <div className="w-{30 rem} flex-wrap border-yellow-500 drop-shadow-lg bg-slate-50 m-5 p-2 border border-3 h-max rounded-lg flex flex-row justify-center ">
          <div className=" flex justify-center sm:mr-3 mr-0 w-40">
            <img src={productImg} alt="product image" />
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
                <Link
                  to="/SelectedProduct"
                  className="my-2  bg-gray-900 hover:bg-gray-950 text-white font-semibold py-2 px-4 border   rounded "
                >
                  Inform Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectedProduct;
