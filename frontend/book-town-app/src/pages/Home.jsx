import axios from "axios";
import React, { useState, useEffect } from "react";
import CarouselHome from "../components/carousel/CarouselHome";
import Dropdown from "../components/Navbar/Dropdown";
import { getAllBooks } from '../store/slices/book.slice'
import {useDispatch, useSelector} from 'react-redux'

function Home() {
  const [genres, setGenres] = useState(null);
  const dispatch = useDispatch()
  const books = useSelector(state => state.booksSlice)

  useEffect(() => {
    const url = "https://pseudo-booktown.onrender.com/api/v1/categories";
    axios
      .get(url)
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));

    dispatch(getAllBooks())
  }, []);
  console.log(genres);

  return (
    <div className="bg-gray-200 h-full pb-10">
      <div className="absolute left-10">
        <button className="my-5 md:ml-8 lg:ml-8">
          {genres && <Dropdown options={genres} />}
        </button>
      </div>

       {
        genres?.map(genre=>(
          <div className="py-16">
          <CarouselHome genre={genre.id} />
          </div>
        ))
       }
    </div>
  );
}

export default Home;
