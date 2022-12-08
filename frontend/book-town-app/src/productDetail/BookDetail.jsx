import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BookDetail = ({ bookInfo }) => {
  const [counter, setCounter] = useState(1);

  const handlePlus = () => setCounter(counter + 1);
  const navigate = useNavigate();

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  console.log(bookInfo);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-200 md:flex md:flex-row justify-center items-center">
        <div className="my-14 mx-auto w-48 md:my-10 md:w-1/2 md:border-solid md:border-r-2 lg:border-solid lg:border-r-2 xl:border-solid xl:border-r-2 2xl:border-solid 2xl:border-r-2 border-vino">
          <h1 className="text-center font-bold text-3xl xl:text-4xl pb-2"></h1>
          <h2 className="text-center text-md xl:text-xl text-vino pb-5 font-semibold">
            {bookInfo.title}
          </h2>
          <img
            className="w-[150px] h-[240px] sm:w-[200px] sm:h-[300px] mx-auto md:w-[226px] md:h-[330px] lg:w-[230px] lg:h-[340px] xl:w-[310px] xl:h-[450px] md:mx-auto md:shadow-xl shadow-bordo"
            src={bookInfo.cover}
            alt="book"
          />
          <p className="text-vino flex justify-center text-sm font-bold pt-4 md:text-xl md:hidden">
            {bookInfo.qualification}
            <span>
              <AiTwotoneStar className="w-4 h-5 ml-1 text-vino md:w-5 md:h-7" />
            </span>
          </p>
        </div>
        <div className="md:w-1/2 md:flex md:flex-col">
          <div className="w-4/5 mx-auto md:w-10/12 md:px-2">
            <p className="hidden sm:hidden md:flex md:justify-center lg:flex lg:justify-center text-vino md:text-xl md:font-bold md:pt-4  md:py-16">
              {bookInfo.qualification}
              <span>
                <AiTwotoneStar className="w-4 h-5 ml-1 text-vino md:w-5 md:h-7" />
              </span>
            </p>
            <p className="text-center text-lg lg:text-xl xl:text-2xl">
              <span className="text-rosaPalido text-xl md:text-2xl lg:text-3xl">
                ❝
              </span>{" "}
              {truncateString(bookInfo?.content, 150)}
              <span className="text-rosaPalido text-xl md:text-2xl lg:text-3xl ">
                ❞
              </span>
            </p>
          </div>
          <div className="text-center py-10 md:mt-2">
            <button className="bg-indigo-700 text-white text-md font-bold p-2 rounded-lg">
              Add to cart
              <span className="ml-2 text-white border-solid border-l py-1"></span>
              <span className="ml-2 text-white font-normal ">
                ${bookInfo.price}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
