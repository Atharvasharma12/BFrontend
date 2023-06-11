import React from "react";
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section className="bg-gray-900 w-full sm:h-screen h-96">
        <div className="absolute top-44 ml-10 ">
          <h1 className="  text-5xl text-white text-left sm:text-4xl ">
            Get the things you need
            <h1>
              in college only on
              <span className="font-bold "> Boekenza.</span>
            </h1>
          </h1>
          <button class="my-2 bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-gray-900 py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            Find Now
          </button>
        </div>
      </section>
      <FeatureProducts />
      <Footer />
    </>
  );
};

export default Home;
