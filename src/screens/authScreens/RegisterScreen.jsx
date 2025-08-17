import React from 'react'
import { NavLink } from 'react-router'

const RegisterScreen = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-12 w-[25%] bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-center mb-6">Signup</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full " placeholder="name@company.com" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full " placeholder="••••••••" />
            </div>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sign In</button>
            <p>Already have an account? <NavLink to=   "/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login</NavLink></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterScreen