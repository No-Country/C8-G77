import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initalState } from "../../data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container w-[500px] mx-auto">
      <Slider {...settings}>
        {initalState.map((item) => (
          <div className="card border border-white bg-black rounded overflow-hidden h-[200px]">
            <div className="h-full">
              <img className="w-full h-full" src={item.img} alt={item.title} />
              <h2 className="text-base text-white my-2 text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
