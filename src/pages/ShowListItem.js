import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import { useNavigate } from "react-router-dom";
//import { Navigate } from 'react-router'
export const ShowListItem =() => {
  const navigate=useNavigate()
  const url="http://localhost:4000"
  const {dataId}=useParams()
  const [data,setData]=useState(null)
  async function fetchData(){
   const res=await fetch(`${url}/api/foodList/listList`)
   const datas=await res.json()
   const info = datas.data.filter((data) => data.id === dataId);
   console.log(info)
   setData(info)
   //console.log(data.data[1].id)
  }
  const removeData=async(id)=>{
    await axios.post(`${url}/api/foodList/removeList`,{_id:id})
    fetchData()
  }
  const clickHandleBack=()=>{
    navigate("/list")
  }
  const clickHandleAdd=()=>{
    navigate(`/addListItem/${dataId}`)
  }
  useEffect(()=>{fetchData()},[])
  //const response=await (url)

 // console.log(data.data)
  //console.log(response)
  //const response=axios.get(url)
  return data === null ? (
    <div>Hi</div>
  ) : (
    // <div>
    //   hello
    //   {data.map(data=>data.name)}
    // </div>
    <div className='w-4/6 my-5 mx-auto'>
    <div className='flex justify-between'>
    <button className='text-center border-2 border-black bg-blue-600 font-bold px-5 text-white mb-5' onClick={clickHandleBack} >Back</button>
    
    <button className='text-center border-2 border-black bg-blue-600 font-bold px-5 text-white mb-5' onClick={clickHandleAdd} >Add</button>
    </div>
    <div className=' w-full'   style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr  "}} >
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white '>Image</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>name</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>description</p> 
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>price</p>
      <p className='text-center border-2 border-black bg-blue-600 font-bold text-white'>remove</p>
    </div>
       
        {data.map((data,index)=>{
          return <div className=' w-full'   style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ", justifyContent:"center",alignItems:"center"}}  key={index}>
            {console.log(`${url}/images/${data.image}`)}
            <img src={`${url}/imagesList/${data.image}`} className='h-8 my-1 mx-auto' alt="description" />

            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white'>{data.name.slice(0,12)}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white'>{data.description.slice(0,10)}</p>
            <p className='text-center border-2 border-black bg-blue-400 font-bold text-white'>{data.price}</p>
           
            <p onClick={()=>{removeData(data._id)}} className='text-center border-2 border-black bg-blue-400 font-bold text-white cursor-pointer'>x</p>
          </div>

        })
        }
      </div>
  
  );

  
}
