
import { useContext, useState } from "react";
import {CalcContext} from "../../context/CalcContext"
import "./Card.css";
import { FaTrash, FaEdit } from 'react-icons/fa';
import ModelEdit from "../modelEdit/ModelEdit"
import { toast } from 'react-toastify';

const Card = ({album}) => {
  const{data,setData}=useContext(CalcContext);
  const[openEdit,setopenEdit]=useState(false);

  function handleDelete(id){
    const newdata=data.filter((album)=>album.id!==id)
    console.log(newdata,"new");
    setData(newdata);
    toast.success("Album deleted successfullty",{
      autoClose: 1000,
    });
    }
    
    function handleEdit(id) {
      setopenEdit(openEdit => !openEdit);
  }

    
  return (
    <>
    <div className='card'>
      <div className="userid">userId:{album&&album.userId}</div>
      <div className="id">id:{album&&album.id}</div>
      <div className="title">title:{album&&album.title}</div>
      <div className="icons">
          <FaTrash onClick={()=>{handleDelete(album.id)}}/>
          
          <div><FaEdit onClick={()=>handleEdit(album.id)}/></div>
      </div>

    </div>
    {openEdit&&<div className="model-edit"><ModelEdit album={album} setopenEdit={setopenEdit}/></div>}
    </>
  )
}

export default Card