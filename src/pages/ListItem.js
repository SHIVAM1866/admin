import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon, faEye } from '@fortawesome/free-solid-svg-icons';

const ListItem = () => {
  //const [item,setItem]=useState(null)
const url="http://localhost:4000"
const [item, setItem] = useState([]);

async function fetchData (){
await axios.get(`${url}/api/food/list`).then((res) => {
  const data = res?.data?.data;
  setItem(data); // Triggers re-render
}
)};
useEffect(() => {
  fetchData()
  //console.log(item); // Logs the updated value whenever `item` changes
}, []);
const removeData=async(id)=>{
  await axios.post(`${url}/api/food/remove`,{_id:id})
  fetchData()
}

return (
  <div className='w-4/6 my-5 mx-auto'>
    <div className=' w-full'   style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}} >
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white '>Image</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>name</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>cuisines</p> 
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>avgRating</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>time</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>veg</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>areaName</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>locality</p> 
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>showData</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>remove</p>
    </div>
       
        {item.map((data,index)=>{
          return <div className=' w-full'   style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", justifyContent:"center",alignItems:"center"}}  key={index}>
            {console.log(`${url}/images/${data.image}`)}
            <img src={`${url}/images/${data.image}`} className='h-8 my-1 mx-auto' alt="description" />

            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.name.slice(0,12)}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.cuisines.slice(0,12)}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.avgRating}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.time}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.veg?"true":"false"}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.areaName.slice(0,12)}</p> 
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'>{data.locality.slice(0,12)}</p>
           <NavLink to={`/showList/${data._id}`}><p className='text-center border-2 border-black bg-blue-400 font-bold text-white text-sm'><FontAwesomeIcon icon={faEye} /></p></NavLink>
            <p onClick={()=>{removeData(data._id)}} className='text-center border-2 border-black bg-blue-400 font-bold text-white cursor-pointer text-sm'>x</p>
          </div>

        })
        }
      </div>
       
       
)
}
export default ListItem