import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import CarouselDetail from "../components/carousel/CarouselDetail";

export const Detail = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full bg-gradient-to-r from-red-300 to-beige h-full md:flex md:flex-row justify-center items-center">
          <div className="my-14 mx-auto w-48 md:my-10 md:w-1/2 md:border-solid md:border-r-2 lg:border-solid lg:border-r-2 xl:border-solid xl:border-r-2 2xl:border-solid 2xl:border-r-2 border-vino">
            <h1 className="text-center font-bold text-3xl xl:text-4xl pb-2">
              Harry Potter
            </h1>
            <h2 className="text-center text-md xl:text-xl text-vino pb-5 font-semibold">
              J.K. Rowling
            </h2>
            <img
              className="w-[150px] h-[240px] sm:w-[200px] sm:h-[300px] mx-auto md:w-[226px] md:h-[330px] lg:w-[230px] lg:h-[340px] xl:w-[310px] xl:h-[450px] md:mx-auto md:shadow-xl shadow-bordo"
              src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg"
              alt="book"
            />
            <p className="text-vino flex justify-center text-sm font-bold pt-4 md:text-xl md:hidden">
              4.5 / 5
              <span>
                <AiTwotoneStar className="w-4 h-5 ml-1 text-vino md:w-5 md:h-7" />
              </span>
            </p>
          </div>
          <div className="md:w-1/2 md:flex md:flex-col">
            <div className="w-4/5 mx-auto md:w-10/12 md:px-2">
              <p className="hidden sm:hidden md:flex md:justify-center lg:flex lg:justify-center text-vino md:text-xl md:font-bold md:pt-4  md:py-16">
                4.5 / 5
                <span>
                  <AiTwotoneStar className="w-4 h-5 ml-1 text-vino md:w-5 md:h-7" />
                </span>
              </p>
              <p className="text-center text-lg lg:text-xl xl:text-2xl">
                <span className="text-rosaPalido text-xl md:text-2xl lg:text-3xl">
                  ❝
                </span>{" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                dolorum maiores aliquid placeat sint magnam veritatis tempore
                facere quas aperiam porro
                <span className="text-rosaPalido text-xl md:text-2xl lg:text-3xl">
                  ❞
                </span>
              </p>
            </div>
            <div className="text-center py-10 md:mt-2">
              <button className="bg-indigo-700 text-white text-md font-bold p-2 rounded-lg">
                Add to cart
                <span className="ml-2 text-white border-solid border-l py-1"></span>
                <span className="ml-2 text-white font-normal ">$100</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-salmon to-bordo py-12">
        <h1 className="pb-6  text-2xl lg:text-3xl xl:text-3xl font-bold text-center text-gray-100">
          Related
        </h1>
        <div className="w-full flex justify-center">
          <div className="w-full">
            <CarouselDetail />
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
