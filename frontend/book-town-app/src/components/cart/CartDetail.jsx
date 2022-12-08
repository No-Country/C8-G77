import React from "react";
import CartCount from "./CartCount";

function CartDetail() {
  return (
    <div className="shadow-sm pt-5">
      <div className="flex flex-row w-full h-80  pt-10 ">
        <div className="w-1/2 sm:border-solid sm:border-r-2 sm:border-gray-300 flex justify-center items-center">
          <div className="flex justify-center">
            <img
              className="shadow-lg shadow-gray-600 w-[160px] h-[250px] sm:w-[190px] sm:h-[280px] md:w-[200px] md:h-[300px]"
              src="http://collection.openlibra.com.s3.amazonaws.com/covers/2016/09/la-musica-en-las-maneras-de-representacion-OpenLibra-110x153.gif"
              alt=""
            />
          </div>
        </div>
        <div className="bg-blue w-1/2 flex flex-col justify-around">
          <h1 className="text-center text-md px-4 pb-5 sm:text-lg md:text-2xl xl:text-3xl">
            La música en las Maneras de Representación cinematográfica
          </h1>
          <CartCount />
          <p className="text-center md:text-lg xl:text-xl">
            Price: <span className="font-bold text-black">$16</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 md:py-10  py-8">
        <button className="md:w-3/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-200 bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartDetail;
