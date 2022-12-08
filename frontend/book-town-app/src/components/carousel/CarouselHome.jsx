import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselDetail.css";
import BookItem from "./BookItem";
import { useEffect } from "react";
import axios from 'axios'

function CarouselHome({ genre, books }) {
  const [booksGenre, setbooksGenre] = useState(null)

  useEffect(() => {
    const url = `https://pseudo-booktown.onrender.com/api/v1/categories/${genre}/books`;
    axios.get(url)
      .then((res) => setbooksGenre(res.data))
      .catch((err) => console.log(err));
  }, [])
  console.log(booksGenre)

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="cardContainer mx-auto w-[280px] sm:w-[565px] md:w-[680px] lg:w-[1040px] xl:w-[1050px] 2xl:w-[970px] xl::max-w-[1366px]">
      <Slider {...settings}>
        {React.Children.toArray(
          booksGenre?.map((item) => (
            <BookItem key={item.book.id} book={item} />
          ))
        )}
      </Slider>
    </div>
  );
}

export default CarouselHome;
