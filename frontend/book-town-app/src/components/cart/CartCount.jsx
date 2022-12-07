import React from "react";

function CartCount() {
  return (
    <div>
      <h1 className="text-center md:text-lg lg:text-xl">Mount</h1>
      <div className=" flex justify-center items-center">
        <button className="bg-indigo-300 text-black font-bold py-2 px-4 md:px-5 md:py-3 rounded">
          -
        </button>
        <span className="m-4 md:m-6 md:text-xl"> 1 </span>
        <button className="bg-indigo-300 text-black font-bold py-2 px-4 md:px-5 md:py-3 rounded">
          +
        </button>
      </div>
    </div>
  );
}

export default CartCount;
