import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function FormSignup() {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://pseudo-booktown.onrender.com/api/v1/auth/register'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data);
        navigate(`/login`)
      })
      .catch(err => console.log(err))

    reset({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      birthday: '',
      phone: '',
      bookPreference: '',
      password: '',
      country: ''
    })
  }
  return (
    <form className=" bg-gray-900 px-12 py-10 sm:px-16 max-sm:rounded-none rounded-3xl border-2 shadow-lg shadow-gray-900 lg:px-16 xl:px-10 xl:py-8 2xl:px-24 2xl:py-20" onSubmit={handleSubmit(submit)}>
      <h2 className="text-3xl 2xl:text-4xl font-semibold text-center text-white 2xl:pb-12">Sign Up</h2>
      <p className="font-medium text-lg 2xl:text-2xl text-gray-200 mt-4 text-center">
        You are new? Join us!
      </p>
      <div className="mt-8">
        <div>
          <label htmlFor="firstName" className="text-lg font-medium text-gray-200">
            First Name
          </label>
          <input
          {...register('firstName')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your first Name"
            type="text"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-lg font-medium text-gray-200">
            Last Name
          </label>
          <input
          {...register('lastName')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your last Name"
            type="text"
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="age" className="text-lg font-medium text-gray-200">
            Age
          </label>
          <input
          {...register('age')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your age"
            type="text"
            id="age"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg font-medium text-gray-200">
            Email
          </label>
          <input
          {...register('email')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="birthday" className="text-lg font-medium text-gray-200">
            Birthday
          </label>
          <input
          {...register('birthday')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="YYYY/MM/DD"
            type="text"
            id="birthday"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-lg font-medium text-gray-200">
            Phone
          </label>
          <input
          {...register('phone')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your phone"
            type="text"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="bookPreference" className="text-lg font-medium text-gray-200">
            Books Preference
          </label>
          <input
          {...register('bookPreference')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your book Preference"
            type="etxt"
            id="bookPreference"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="password" className="text-lg font-medium text-gray-200">
            Password
          </label>
          <input
          {...register('password')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your password"
            type="password"
            id="password"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="country" className="text-lg font-medium text-gray-200">
           Country
          </label>
          <input
          {...register('country')}
            className="w-full rounded-xl p-3 mt-1 bg-gray-800 outline-violet-300"
            placeholder="Enter your country"
            type="text"
            id="country"
          />
        </div>

        <div className="pt-8 flex-col text-center 2xl:pt-12">
          <button className="w-2/3 bg-orange-600 focus:ring focus:ring-orange-300 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            Accept
          </button>
          <p className="text-gray-200 pt-4 text-sm">
            Are you already registered? <br />
            <Link to="/Login">
              <span className="text-violet-300 underline">Log in!</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default FormSignup;
