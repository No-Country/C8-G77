import React from "react";
import LogSignBar from "../components/login-signup/LogSignBar";

export const Detail = () => {
  return (
    <>
      <LogSignBar />
      <body>
      <div className="bg-lime-600 bg-cover w-full h-80">
        <section className="w-11/12 md:w-4/5 h-screen m-auto flex items-center">
          
            <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
             <div className="relative">
               <img id="image" className=" static w-full h-full" src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg" alt="Harry Potter"></img>
               <div className="arrows w-full absolute insert-y-1/2 flex justify-between px-3">
                 <button id="prev"><i className="fa-solid fa-chevron-left"></i> </button>
                 <button id="next"><i className="fa-solid fa-chevron-right"></i> </button>
               </div>
             </div>
             <div className="space-y-5 p-5">
               <h4 className="text-4xl font-semibold">Harry El Sucio Potter</h4>
               <h1 className="text-3xl font-bold"> <h1 className="text-xl font-bold"> Section:</h1> Magic Books</h1>
               <h2 className="text-xl font-bold">$430.00</h2>
               <p className="text-sm">( Descripcion)
               </p>
               <p className="text-sm"> El primer libro de la saga </p>
               <div className="space-y-5">
                 <input className="w-24 h-8 px-3 border border-gray-600 outline-0" type="number" id="amount" />
                 <div>
                   <p>Disponibilidad</p> <span class="text-lime-600/100 text-2xl">Hay stock</span>

                 </div>
               </div>
               <div className=" space-x-5 flex items-center">
                 <button className="flex-items-center space-x-2 border border-rose-400-px-5 py-2 rounded-md
                 hover:bg-rose-400 hover:text-white">
                   <i className="fa-regular fa-heart text-xl"></i>
                   <span>Favorites</span>
                   <i class="fa-regular fa-heart"></i>
                 </button>
                 <button className="bg-rose-400 px py-2 rounded-md text-white hover:hg-white
                 hover:border hover:border-gray-600 hover:text-black">
                   <i class="fa-solid fa-cart-shopping"></i>
                   <span>Add To Cart</span>
                 </button>
               </div>
             </div>
           </div>
               
        </section>
        </div>
        <section className="up-sells upsells products">
          <ul className="container mx-auto">
            <div>
                <h2 class="text-3xl font-bold mb-3">
                También te recomendamos
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-6 ">
              <div>
               <img id="image" className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg" alt="Harry Potter"></img>
              </div> 
              <div>
               <img class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://cdn.culturagenial.com/es/imagenes/bajo-la-misma-estrella-libro-cke.jpg" alt="Bajo la Misma Estrella"></img>
              </div>
              <div>
              <img className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9_screen.jpg?ts=1636980113" alt="The Arrivals"></img>

              </div>
              <div>
              <img className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://images.cdn2.buscalibre.com/fit-in/360x360/4c/a1/4ca1e3b323be5dc522130e0bb8da7545.jpg" alt="The Hunger Games"></img>

              </div>
            </div>
            
          </ul>
          <ul className="container mx-auto mt-40 my-70">
            <div className="grid grid-cols-4 gap-4 ">
              <div>
               <img id="image" className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg" alt="Harry Potter"></img>
              </div> 
              <div>
               <img class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://cdn.culturagenial.com/es/imagenes/bajo-la-misma-estrella-libro-cke.jpg" alt="Bajo la Misma Estrella"></img>
              </div>
              <div>
              <img className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9_screen.jpg?ts=1636980113" alt="The Arrivals"></img>

              </div>
              <div>
              <img className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl" src="https://images.cdn2.buscalibre.com/fit-in/360x360/4c/a1/4ca1e3b323be5dc522130e0bb8da7545.jpg" alt="The Hunger Games"></img>

              </div>
            </div>
            
          </ul>
        </section >
      </body>
      </>
  );
};
export default Detail;