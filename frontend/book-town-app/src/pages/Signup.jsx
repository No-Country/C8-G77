import React from "react";
import Carousel from "../components/carousel/Carousel";
import FormSignup from "../components/form/FormSignup";

function Signup() {
  return (
    <>
      <div className="flex-col lg:flex lg:flex-row">
        <div className="w-full lg:w-3/5 bg-gray-200 justify-center items-center">
          <div className="lg:w-8/10 pt-10 pb-6 sm:pb-12">
            <h1 className="pt-10 text-3xl lg:text-4xl font-bold text-center mb-8">
              <span className=" text-violet-500 text-xl md:text-2xl lg:text-3xl">
                ❝
              </span>{" "}
              Your favourites <br /> under the same roof{" "}
              <span className="text-violet-500 text-xl md:text-2xl lg:text-3xl">
                ❞
              </span>
            </h1>
            <Carousel />
          </div>
        </div>

        <div className="w-full sm:flex sm:justify-center sm:bg-gradient-to-r from-blue-800 via-cyan-500 to-violet-700 lg:w-2/5 p-0">
          <FormSignup />
        </div>
      </div>
    </>
  );
}

export default Signup;
