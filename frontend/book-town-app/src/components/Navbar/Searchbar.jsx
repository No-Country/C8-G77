import React from "react";
import { HiSearchCircle } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="px-4 py-1 w-80 max-sm:w-5/6 rounded-lg bg-transparent outline outline-2 outline-violet-500 placeholder-gray-300 text-white"
        placeholder="Search..."
      />
      <button className="px-1 text-violet-400">
        <HiSearchCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SearchBar;
