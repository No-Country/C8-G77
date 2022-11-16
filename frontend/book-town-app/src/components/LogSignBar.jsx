import React from "react";
import logo from "../assets/Logo-5x2.png";

function NavBar() {
  return (
    <div className="bg-black h-20 flex max-sm:flex max-sm:justify-center  ">
      <a>
        <img className="h-20 w-26 ml-6" src={logo} alt="page-logo" />
      </a>
    </div>
  );
}

export default NavBar;
