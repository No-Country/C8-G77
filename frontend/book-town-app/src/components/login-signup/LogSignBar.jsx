import React from "react";
import logo from "../../assets/Logo-5x2.png";

function LogSignBar() {
  return (
    <div className="bg-black h-20 flex max-lg:flex max-lg:justify-center  ">
      <div>
        <img className="h-20 w-26 ml-6" src={logo} alt="page-logo" />
      </div>
    </div>
  );
}

export default LogSignBar;
