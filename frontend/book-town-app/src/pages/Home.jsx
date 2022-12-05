import React from "react";
import CarouselHome from "../components/carousel/CarouselHome";

function Home() {
  return (
    <div className="bg-gray-200 h-full border-solid border-2 border-black pb-10">
      <div className="py-16">
        <h1></h1>
        <CarouselHome genre={"Fiction"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Drama"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Poetry"} />
      </div>
      <div className="py-16">
        <CarouselHome genre={"Romance"} />
      </div>
    </div>
  );
}

export default Home;
