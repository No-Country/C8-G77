import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./CarouselDetail.css";

function CarouselHome({ genre }) {
  const [books, setBooks] = useState(null);

  const getAllBooks = () => {
    const url = `https://pseudo-booktown.onrender.com/api/v1/books`;
    axios.get(url)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  console.log(books);

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
    <div className="cardContainer mx-auto w-[280px] sm:w-[565px] md:w-[680px] lg:w-[1040px] xl:w-[1050px] 2xl:w-[970px]">
      <Slider {...settings}>
        {React.Children.toArray(
          books?.map((item) => (
            <div className=" border border-white rounded overflow-hidden h-[230px] md:h-[260px] lg:h-[290px] 2xl:h-[300px] shadow-md shadow-black ">
              <div className="h-full">
                {/* <h1>{item.categories[0].name}</h1> */}
                <img
                  className="w-full h-full"
                  src={item.cover}
                  alt={item.thumbnail}
                />
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}

export default CarouselHome;
