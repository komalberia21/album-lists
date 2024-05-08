import "./Model.css";
import { useContext, useState } from "react";
import { CalcContext } from "../../context/CalcContext";
import { toast } from 'react-toastify';


const Model = ({setOpen}) => {
 
  const{data,setData}=useContext(CalcContext);
  
  const[formdata,setfromdata]=useState({
    userId:"",
    title:""
  })
  console.log(formdata,"formdata");
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setfromdata({
      ...formdata,
      [name]:value
    })
  }
  
async function postAlbum(e) {
  e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
    });

    if (response.ok) {
        // Request was successful
        const responseData = await response.json();
        console.log(responseData);
        setData([responseData,...data]);
        setOpen();
        console.log("Album posted successfully:", responseData);
        toast.success("Album posted successfullty",{
          autoClose: 2000,
        });
    } else {
        // Request failed
        console.error("Failed to post album:", response.status, response.statusText);
    }
}


return (
    <div className="add-model">
      <h2>Add album</h2>
      <form onSubmit={postAlbum} className="add-form">
        <div onClick={setOpen} className="cross">*</div>
        <div className="item">
        <label htmlFor="userid">UserId</label>
        <input type="number"
         placeholder="enter user id"
         name="userId"
         value={formdata.userId}
         onChange={handleChange}
         />
        </div>
        
        <div className="item">
        <label htmlFor="title">Title</label>
        <input type="text"
         placeholder="enter text"
         name="title"
         value={formdata.title}
         onChange={handleChange}
         />
        </div>
        <button className="from-btn">Add album</button>
      </form>
    </div>
  )
}

export default Model