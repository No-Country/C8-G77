import React from "react";
import logo from "../../assets/Logo-2x2.png";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

function NavBar() {
  return (
    <>
      <div className="shadow-md w-full ">
        <div className="flex items-center justify-between bg-black px-7 md:px-10">
          <div className="cursor-pointer flex items-center">
            <Link to="/">
              <img
                className="h-[80px] w-[80px] cursor-pointer flex items-center"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex items-center justify-between bg-gradient-to-r from-violet-900 via-indigo-900 to-gray-900 ">
          <div className="p-3 text-sm">
            <ul className="md:flex md:items-center">
              <li className="md:ml-8">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="md:ml-8">
                <Link to="/" className="text-white">
                  Genres
                </Link>
              </li>
              <li className="md:ml-8">
                <Link to="/account" className="text-white">
                  Account
                </Link>
              </li>
              <li className="md:ml-8">
                <Link to="/history" className="text-white">
                  History
                </Link>
              </li>
              <li className="md:ml-8 bg-orange-600 hover:bg-orange-500 p-2 rounded">
                <Link to="/" className="text-white">
                  Shoppig Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="pr-16 ">
            <Link to="/signup">
              <button className="font-medium text-sm text-white p-3 rounded-2xl bg-indigo-500 hover:bg-transparent hover:text-indigo-300 hover:font-bold hover:border-solid hover:border-2 hover:border-gray-400 ease-in-out duration-200">
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
