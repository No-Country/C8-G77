import React from "react";
import CarouselHome from "../components/carousel/CarouselHome";

function Home() {
  return (
    <div className="bg-gray-200 h-full border-solid border-2 border-black pb-10">
      <div className="py-16">
        <h1></h1>
        <CarouselHome genre={"Ciencia"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Cómics"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Electrónica"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Redes y Sys Admin"} />
      </div>
    </div>
  );
}

export default Home;
