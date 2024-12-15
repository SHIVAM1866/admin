import React, { useState } from "react";
import upload from "../img/upload.png";
import axios from "axios";
import { useParams } from "react-router";
const AddListItem = () => {
    const {itemId}=useParams()
  const [img, setImage] = useState(null);
  const [data, setData] = useState({
    //id:"",
    name: "",
    //image:"",
    description: "",
    price: "",
    
  });
  const url = "http://localhost:4000";
  const handleChange = (e) => {
    //name:e.target.name
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  //console.log(img.file[0])
  const submitHandler = async (e) => {
    e.preventDefault();
    const formatData = new FormData();
    formatData.append("id", itemId);
    formatData.append("name", data.name);
    formatData.append("image", img); // Attach the file
    formatData.append("description", data.description);
    formatData.append("price", data.price);
 
    try {
      const response = await axios.post(`${url}/api/foodList/addList`, formatData, {
        headers: {

          "Content-Type":"multipart/form-data",
        },
      });
      setData({
        //id:"",
        name: "",
        description: "",
        price: "",
        
      });
      setImage(null);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
      console.error("Full Error:", error);
    }
  };
  console.log(img)
  console.log(data);
  return (
    <div className="px-10 w-full ">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full   items-center gap-x-5 gap-y-5 justify-evenly"
      >
        <div className="w-1/3">
          <label for="id" className="w-2/5 text-xl font-bold right-5">
            id
          </label>
          <input
            type="text"
            name="id"
            value={itemId}
            //onChange={handleChange}
            id="id"
            placeholder={`${itemId}`}
            className="w-full  border-2 px-2  border-black py-2 hover:none outline-none rounded-lg mt-2 "
          />
        </div>

        <div className="w-1/3">
          <label for="name" className="w-2/5 text-xl font-bold right-5">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            id="name"
            placeholder="enter name"
            className="w-full  border-2 px-2 hover:none outline-none border-black py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="description" className="w- text-xl font-bold right-5">
            description
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            id="description"
            placeholder="enter description"
            className="w-full hover:none outline-none rounded-lg border-2 px-2  border-black py-2 prounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="price" className="w-2/5 text-xl font-bold right-5">
            price
          </label>
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
            id="price"
            placeholder="enter time"
            className="w-full  border-2 px-2  border-black hover:none outline-none py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <p className="w-2/5 text-xl  font-bold right-5">Image</p>
          <label htmlFor="image">
            <img //src={upload}
               src={img === null ? upload : URL.createObjectURL(img)}
              alt=""
              className="w-52"
            ></img>
          </label>
          <input
            type="file"
            onChange={(e)=>setImage(e?.target.files[0])}
            id="image"
            placeholder="enter Img"
            className="w-52  "
            hidden
          />
        </div>
        <div className="w-1/3 "></div>
        <div className="w-full ml-32 ">
          <button type="submit" className="py-2 px-6 bg-blue-600 text-white self-start">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddListItem