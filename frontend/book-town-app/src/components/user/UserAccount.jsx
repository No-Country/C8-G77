import React from "react";
import UserImg from "../../assets/UserImg.jpg";

function UserAccount() {
  
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center w-full h-screen">
      <div className=" w-[280px] lg:w-1/4 m-auto py-5">
        <img className=" rounded-full" src={UserImg} alt="" />
      </div>
      <div className="lg:w-2/4 grid grid-cols-2 gap-5 p-8 items-center text-center bg-gradient-to-r from-vino to-bordo text-white text-lg sm:text-lg h-screen lg:text-xl">
        <p className="font-bold py-5">
          First Name: <span className="font-normal">Gabo</span>
        </p>
        <p className="font-bold py-5">
          Last Name: <span className="font-normal">Gauna</span>{" "}
        </p>
        <p className="font-bold py-5">
          Age: <span className="font-normal">22</span>
        </p>
        <p className="font-bold py-5">
          Birthday: <span className="font-normal">07/07/2000</span>
        </p>
        <p className="font-bold py-5">
          Phone: <span className="font-normal">1234567</span>
        </p>
        <p className="font-bold py-5">
          Email: <span className="font-normal">ej@gmail.com</span>
        </p>
        <p className="font-bold py-5">
          Country: <span className="font-normal">Argentina</span>
        </p>
        <p className="font-bold py-5">
          Genre: <span className="font-normal">Male</span>
        </p>
      </div>
    </div>
  );
}

export default UserAccount;
