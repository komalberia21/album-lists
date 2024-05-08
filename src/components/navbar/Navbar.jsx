import { useState } from "react"
import "./Navbar.css"
import Model from "../model/Model";

const Navbar = () => {
  const[open,setOpen]=useState(false);

  
  function handleOpen(){
   setOpen(open=>!open);
  }

  return (
    <>
    <div className="navbar">
      <div className="icon">Album list</div>
      <div onClick={handleOpen} className="add"> + Add album</div>
      </div>
      {open&&<div className="addmodelopen"><Model setOpen={handleOpen}/></div>}
      
      </>
     
  )
}

export default Navbar