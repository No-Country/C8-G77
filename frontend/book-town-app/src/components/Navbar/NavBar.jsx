import React, { useState } from "react";
import logo from "../../assets/Logo-2x2.png";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import { TfiMenu, TfiClose } from "react-icons/tfi";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="flex-col pb-20 md:py-1 md:flex md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between bg-gray-900 px-7 md:px-10">
          <div className="cursor-pointer flex justify-center items-center md:flex md:items-center md:justify-start lg:flex lg:items-center">
            <Link to="/">
              <img
                className="h-[80px] w-[80px] cursor-pointer flex items-center"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex items-center justify-between bg-gradient-to-r from-violet-900 via-indigo-900 to-gray-900 ">
          <div className="md:p-0 lg:p-0 text-sm">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute left-6 top-36 cursor-pointer md:hidden lg:hidden text-white "
            >
              {open ? <TfiClose /> : <TfiMenu />}
            </div>
            <ul
              className={`max-md:bg-gradient-to-r from-violet-900 via-indigo-900 to-gray-900 pb-2 md:flex md:items-center md:pb-0 lg:pb-0 absolute md:static lg:static z-[10]  md:z-auto lg:z-auto  left-0 w-full md:w-auto lg:w-auto md:pl-0 lg:pl-0 pl-5 text-center max-md:text-base ${
                open ? "top-50" : "top-[-420px]"
              }`}
            >
              <li className="my-5 md:ml-8 lg:ml-8 ">
                <Link to="/" className="text-white hover:text-orange-100">
                  Home
                </Link>
              </li>

              <button className="my-5 md:ml-8 lg:ml-8 bg-pink-600 hover:bg-pink-500 hover:font-bold ease-in-out duration-300 p-2 rounded">
                <Link to="/cart" className="text-white">
                  Shoppig Cart
                </Link>
              </button>
            </ul>
          </div>

          <div className="pr-4 md:pr-10 lg:pr-10 max-md:absolute max-md:right-0 max-md:top-36">
            <Link to="/signup">
              <button className="font-medium text-sm text-white p-2 md:p-3 lg:p-3 rounded-2xl bg-indigo-500 hover:bg-transparent hover:text-indigo-300 hover:font-bold hover:border-solid hover:border-2 hover:border-gray-400 ease-in-out duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
