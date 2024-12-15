import React from 'react'
import { NavLink } from "react-router";
 const Sidebar = () => {
  return (
    <div className='w-1/6 h-[calc(100vh-80px)] pl-5 py-6 gap-16 flex flex-col items-end border-2 border-blue-700'>
        <NavLink to="/add">
        <p className='text-lg border-2 rounded-tl-lg rounded-bl-lg border-r-0 border-blue-700 px-6 py-4'>Add items</p>
        </NavLink>
        <NavLink to="/list">
        <p className='text-lg border-2 rounded-tl-lg rounded-bl-lg border-r-0 border-blue-700 px-6 py-4'>List Items</p>
        </NavLink>
        <NavLink to="/remove">            
        <p className='text-lg border-2 rounded-tl-lg rounded-bl-lg border-r-0 border-blue-700 px-6 py-4'>Remove Items</p>
        </NavLink>
    </div>
  )
}
export default Sidebar