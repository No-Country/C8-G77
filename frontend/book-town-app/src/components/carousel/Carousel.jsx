import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initalState } from "../../data";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true,
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
    <div className="container w-[500px] mx-auto 2xl:w-[800px]">
      <Slider {...settings}>
        {React.Children.toArray(
          initalState.map((item) => (
            <div className="card border border-white  rounded overflow-hidden h-[200px] 2xl:h-[300px] shadow-md shadow-gray-600 ">
              <div className="h-full ">
                <img
                  className="w-full h-full"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}

export default Carousel;
