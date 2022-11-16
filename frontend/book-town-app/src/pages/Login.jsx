import React from "react";
import Carousel from "../components/carousel/Carousel";
import LogSignBar from "../components/LogSignBar";

export const Login = () => {
  return (
    <>
      <LogSignBar />
      <div className="bg-gray-300">
        <Carousel />
      </div>
    </>
  );
};
export default Login;
