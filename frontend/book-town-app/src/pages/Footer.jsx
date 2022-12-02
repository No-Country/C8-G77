import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import {Icons} from './Menu'
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          
        </div>
        <div>
            <h1 className="lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                <span className="text-teal-400">BookTown</span> tu e-comerce de libros
            </h1>  
        </div>
        
        <ItemsContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt2 text-gray-4'' text-sm pb-8" >
            <span>2022. App.Realizada G8-77 NoCountry</span>
            <span>Terms. Privacy Policy</span>
            <SocialIcons Icons ={Icons} />
            </div>   
      </footer>
    );
  };
  

export default Footer;