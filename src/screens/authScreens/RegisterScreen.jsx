import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { addUser } from '../../features/AuthSlice'

const RegisterScreen = () => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm()
  const dispatch = useDispatch()
   const submitHandler = (data) => {
    dispatch(addUser(data))
    console.log(data)
   }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-12 w-[25%] bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Signup</h1>
        
        <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-4"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input 
              {...register('username')}  
              type="text" 
              autoComplete="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              placeholder="username" 
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input 
              {...register('email')}  
              type="email" 
              autoComplete="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              placeholder="email" 
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input 
              {...register('password')}  
              type="password" 
              autoComplete="new-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••" 
            />
          </div>

          <button 
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
            type="submit"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-600">
            Already have an account? 
            <NavLink to="/" className="font-medium text-blue-600 hover:underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
