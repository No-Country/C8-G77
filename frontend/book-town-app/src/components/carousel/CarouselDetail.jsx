import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initalState } from "../../data";
import "./CarouselDetail.css";

function CarouselDetail() {
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
    <div className="cardContainer mx-auto w-[310px] sm:w-[565px] md:w-[680px] lg:w-[920px] xl:w-[960px] 2xl:w-[970px]">
      <Slider {...settings}>
        {React.Children.toArray(
          initalState.map((item) => (
            <div className=" border border-white rounded overflow-hidden h-[230px] md:h-[260px] lg:h-[290px] 2xl:h-[300px] shadow-md shadow-salmon ">
              <div className="h-full">
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

export default CarouselDetail;
