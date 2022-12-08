import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const BookItem = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${book.book.id}`);
  };
  return (
    <div
      className=" border border-white rounded overflow-hidden h-[230px] md:h-[260px] lg:h-[290px] 2xl:h-[300px] shadow-md shadow-black "
      onClick={handleClick}
    >
      <div className="h-full">
        <span className="flex justify-center bg-gray-900 py-0.5 text-white">
          Ver Detalles
        </span>
        <img
          className="w-full h-full"
          src={book.book.cover}
          alt={book.book.thumbnail}
        />
      </div>
    </div>
  );
};

export default BookItem;
