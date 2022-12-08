import axios from "axios";
import React, { useState, useEffect } from "react";
import CarouselHome from "../components/carousel/CarouselHome";
import Dropdown from "../components/Navbar/Dropdown";

function Home() {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const url = "https://pseudo-booktown.onrender.com/api/v1/categories";
    axios
      .get(url)
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(genres);

  return (
    <div className="bg-gray-200 h-full border-solid border-2 border-black pb-10">
      <div className="absolute left-10">
        <button className="my-5 md:ml-8 lg:ml-8">
          {genres && <Dropdown options={genres} />}
        </button>
      </div>

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
