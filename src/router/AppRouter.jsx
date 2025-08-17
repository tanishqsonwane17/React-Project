import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'  // 👈 yahan se import karna hai
import AuthLayout from '../Layouts/AuthLayout'
import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'
import Home from '../screens/mainScreens/Home'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginScreen />
        },
        {
          path: 'register',
          element: <RegisterScreen />
        }
      ],
    },
    {
      path: '/main',
      element:<Home/>
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
