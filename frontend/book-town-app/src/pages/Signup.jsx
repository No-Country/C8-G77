import React from "react";
import Carousel from "../components/carousel/Carousel";
import FormSignup from "../components/form/FormSignup";

function Signup() {
  return (
    <>
<<<<<<< HEAD
      <LogSignBar />
      <div className="flex-col lg:flex lg:flex-row xl:flex xl:justify-center xl:items-center">
        <div className="w-full lg:w-3/5 bg-gray-200 justify-center items-center xl:h-screen xl:flex xl:justify-center xl:items-center">
          <div className="lg:w-8/10 pt-10 xl:pt-0 pb-6 sm:pb-12">
            <h1 className="pt-10 xl:pt-2 xl:pb-6 text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-8">
=======
      <div className="flex-col lg:flex lg:flex-row">
        <div className="w-full lg:w-3/5 bg-gray-200 justify-center items-center">
          <div className="lg:w-8/10 pt-10 pb-6 sm:pb-12">
            <h1 className="pt-10 text-3xl lg:text-4xl font-bold text-center mb-8">
>>>>>>> cesar_branch
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

        <div className="w-full sm:flex sm:justify-center sm:py-12 sm:bg-gradient-to-r from-blue-800 via-cyan-500 to-violet-700 lg:w-2/5 lg:px-4 xl:h-screen xl:flex xl:justify-center xl:items-center">
          <FormSignup />
        </div>
      </div>
    </>
  );
}

export default Signup;
