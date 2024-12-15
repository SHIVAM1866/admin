import React from 'react'
import Navbar from './components/navbar/Navbar.js'
import Sidebar from './components/sidebar/Sidebar.js'
import AddItem from "./pages/AddItem.js"
import ListItem from './pages/ListItem.js'
import Order from './pages/Order.js'
import { Routes, Route } from "react-router";
import { ShowListItem } from './pages/ShowListItem.js'
import AddListItem from './pages/AddListItem.js'
const App = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <Sidebar/>
        <Routes>
        <Route path="/add" element={<AddItem/>} />
        <Route path="/list" element={<ListItem />} />
        <Route path="/order" element={<Order />} /> 
        <Route path="/showList/:dataId" element={<ShowListItem />} /> 
        <Route path="/addListItem/:itemId" element={<AddListItem />} /> 
        </Routes>
        </div>
    </div>
  )
}
export default App