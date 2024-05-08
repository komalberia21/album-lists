import "../model/Model.css";
import { useContext, useState } from "react";
import { CalcContext } from "../../context/CalcContext";
import { toast } from 'react-toastify';


const ModelEdit = ({album,setopenEdit}) => {
const{data,setData}=useContext(CalcContext);
console.log(data,'data');

function handleEditAlbum(responseData) {
  // Map through the data array and replace the album with the edited one
  const updatedData = data.map((item) => {
      if (item.id === responseData.id) {
          return responseData; // Replace the edited album
      } else {
          return item; // Keep other albums unchanged
      }
  });
// Update the data state with the updatedData
   setopenEdit();
   toast.success("Album edited successfullty",{
    autoClose: 2000,
  });
  setData(updatedData);
}

   const[formdata,setfromdata]=useState({
    userId:album?album.userId:"",
    title:album?album.title:""
  })
  console.log(formdata,"formdata");
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setfromdata({
      ...formdata,
      [name]:value
    })
  }
  
async function editAlbum(e) {
  e.preventDefault();
  try{
    const url = `https://jsonplaceholder.typicode.com/albums/${album.id}`;
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
    });

    if (response.ok) {
        // Request was successful
        const responseData = await response.json();
        console.log(responseData);
        //setData([responseData,...data]);
        console.log("Album edited successfully:", responseData);
        handleEditAlbum(responseData);
    } else {
        // Request failed
        console.log("Failed to edit album:", response.status, response.statusText);
        handleEditAlbum({...formdata,id:album.id});
    }
  }catch(e){
    console.log(e);
  }
}


return (
    <div className="add-model">
      <h2>Edit album</h2>
      <form onSubmit={editAlbum} className="add-form">
        <div onClick={()=>{setopenEdit()}}  className="cross">*</div>
        <div className="item">
        <label htmlFor="userid">UserId</label>
        <input type="number"
         placeholder="enter user id"
         name="userId"
         value={formdata.userId}
         onChange={handleChange}
         />
        </div>
        
        <div className="item textarea">
        <label htmlFor="title">Title</label>
        <input type="text"
         placeholder="enter text"
         name="title"
         value={formdata.title}
         onChange={handleChange}
         />
        </div>
        <button className="from-btn">Edit album</button>
      </form>
    </div>
  )
}

export default ModelEdit