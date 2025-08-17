import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'

const LoginScreen = () => {
  const LocalData = JSON.parse(localStorage.getItem('user'))
  const { register, handleSubmit, reset } = useForm()

  const submitHandler = (data) => {
    comparePassword(data)
    reset()
  }
  const comparePassword = (val)=>{
  if(val.password === LocalData.password && val.email === LocalData.email){
    console.log("Login Success")
  }
  else return console.log("Login Failed")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-12 w-[25%] bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input 
              {...register('email')} 
              type="email" 
              autoComplete="email"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com" 
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input 
              {...register('password')} 
              type="password" 
              autoComplete="current-password"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign In
          </button>

          <p className="text-sm mt-2">
            Don’t have an account? 
            <NavLink to="/register" className="font-medium text-blue-600 hover:underline">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen
