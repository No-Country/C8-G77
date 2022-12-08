import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CarouselDetail from "../components/carousel/CarouselDetail";
import BookDetail from '../productDetail/BookDetail';

export const Detail = ({ productInfo }) => {
  const [bookInfo, setBookInfo] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const URL = `https://pseudo-booktown.onrender.com/api/v1/books/${id}`
    axios.get(URL)
      .then(res => setBookInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(bookInfo)

  return (
    <div>
      {bookInfo && <BookDetail bookInfo={bookInfo} />}
      <div className="bg-gray-900 py-12">
        <h1 className="pb-6  text-2xl lg:text-3xl xl:text-3xl font-bold text-center text-gray-200">
          Related
        </h1>
        <div className="w-full flex justify-center">
          <div className="w-full">
            <CarouselDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
