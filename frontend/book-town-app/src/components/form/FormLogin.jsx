import React from "react";
import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <form className=" bg-gray-900 px-12 py-10 sm:px-16 max-sm:rounded-none rounded-3xl border-2 shadow-lg shadow-gray-900 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-white">Log in</h2>
      <p className="font-medium text-lg text-gray-200 mt-4 text-center">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <div>
          <label for="email" className="text-lg font-medium text-gray-200">
            Email
          </label>
          <input
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your email"
            type="email"
            id="email"
          />
        </div>

        <div className="mt-8">
          <label for="password" className="text-lg font-medium text-gray-200">
            Password
          </label>
          <input
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your password"
            type="password"
            id="password"
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label
              for="remember"
              className="ml-2 font-medium text-base text-gray-200"
            >
              Remember me
            </label>
          </div>
        </div>

        <div className="pt-8 flex-col text-center">
          <button className="w-2/3 bg-orange-600 focus:ring focus:ring-orange-300 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            Accept
          </button>
          <p className="text-gray-200 pt-4 text-sm">
            Do not you have an account yet? <br />
            <Link to="/Signup">
              <span className="text-violet-300 underline">Sign up!</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
