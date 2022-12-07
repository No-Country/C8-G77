import React from "react";
import CartDetail from "../components/cart/CartDetail";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  return (
    <div className="bg-gray-200 flex flex-col">
      <CartDetail />
      <CartDetail />
      <CartDetail />
      <div className="flex flex-col items-end py-10 px-5 xl:px-10">
        <p className="font-bold md:text-lg xl:text-xl">
          Total price: <span className="font-bold text-green-700">$16</span>
        </p>
        <button className="p-2 mt-2 bg-gray-700 font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-md">
          Clear cart
        </button>
      </div>
      <div className="flex justify-center items-center pb-8">
        <button
          type="button"
          class=" w-4/5 xl:w-3/5 flex flex-row justify-center px-4 py-2.5 bg-pink-600 text-white font-bold text-sm leading-normal uppercase rounded shadow-md shadow-gray-700 hover:bg-pink-500 hover:shadow-gray-700    transition duration-300 ease-in-out"
        >
          <span>
            <FaShoppingCart className="mr-2 mt-0.5 w-4 h-4" />{" "}
          </span>
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default Cart;
