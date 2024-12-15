import React, { useState } from "react";
import upload from "../img/upload.png";
import axios from "axios";
const AddItem = () => {
  const [img, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    //image:"",
    areaName: "",
    locality: "",
    cuisines: "",
    avgRating: "",
    veg: "",
    time: "",
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
    formatData.append("name", data.name);
    formatData.append("image", img); // Attach the file
    formatData.append("areaName", data.areaName);
    formatData.append("locality", data.locality);
    formatData.append("cuisines", data.cuisines);
    formatData.append("avgRating", data.avgRating);
    formatData.append("veg", data.veg);
    formatData.append("time", data.time);
    try {
      const response = await axios.post(`${url}/api/food/add`, formatData, {
        headers: {

          "Content-Type":"multipart/form-data",
        },
      });
      setData({
        name: "",
        areaName: "",
        locality: "",
        cuisines: "",
        avgRating: "",
        veg: "",
        time: "",
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
          <label for="cuisines" className="w- text-xl font-bold right-5">
            cuisines
          </label>
          <input
            type="text"
            name="cuisines"
            value={data.cuisines}
            onChange={handleChange}
            id="cuisines"
            placeholder="enter cuisines"
            className="w-full hover:none outline-none rounded-lg border-2 px-2  border-black py-2 prounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="time" className="w-2/5 text-xl font-bold right-5">
            Time
          </label>
          <input
            type="text"
            name="time"
            value={data.time}
            onChange={handleChange}
            id="time"
            placeholder="enter time"
            className="w-full  border-2 px-2  border-black hover:none outline-none py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="veg" className="w-2/5 text-xl font-bold right-5">
            veg
          </label>
          <input
            type="text"
            name="veg"
            value={data.veg}
            onChange={handleChange}
            id="veg"
            placeholder="enter veg"
            className="w-full  border-2 px-2  border-black py-2 hover:none outline-none rounded-lg mt-2 "
          />
        </div>

        <div className="w-1/3">
          <label for="avgRating" className="w-2/5 text-xl font-bold right-5">
            avgRating
          </label>
          <input
            type="text"
            name="avgRating"
            value={data.avgRating}
            onChange={handleChange}
            id="avgRating"
            placeholder="enter avgRating"
            className="w-full  border-2 px-2 hover:none outline-none border-black py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="areaName" className="w-2/5 text-xl font-bold right-5">
            areaName
          </label>
          <input
            type="text"
            name="areaName"
            value={data.areaName}
            onChange={handleChange}
            id="areaName"
            placeholder="enter areaName"
            className="w-full  border-2 px-2 hover:none outline-none  border-black py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3">
          <label for="locality" className="w-2/5 text-xl font-bold right-5">
            locality
          </label>
          <input
            type="text"
            name="locality"
            value={data.locality}
            onChange={handleChange}
            id="locality"
            placeholder="enter locality"
            className="w-full  border-2 px-2 hover:none outline-none border-black py-2 rounded-lg mt-2 "
          />
        </div>
        <div className="w-1/3 "></div>
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
        <div className="w-full ml-32 mb-4 ">
          <button type="submit" className="py-2 px-6 bg-blue-600 text-white self-start">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddItem; 
