import React from "react";
import logo from "../assets/Logo-5x2.png";

function NavBar() {
  return (
    <div className="bg-black h-24 flex items-center ">
      <a href="">
        <img className="h-20 w-26 ml-6" src={logo} alt="page-logo" />
      </a>
    </div>
  );
}

export default NavBar;
