import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <>
    <div>
        <nav>
            Nav bar
        </nav>
        <Outlet/>
    </div>
    </>
  )
}

export default AdminLayout