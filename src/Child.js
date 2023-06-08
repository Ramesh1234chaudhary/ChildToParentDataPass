import React, { useState } from 'react'
import "./Style.css"
const Child = ({getcolor}) => {
    const [activecolor,setActivecolor]=useState();

    const handlechange=(e)=>{
        setActivecolor(e.target.value)  ; 
        getcolor(activecolor);
        
    }
  return (
    <div className='child'>
      <input type="text" placeholder='enter your color' value={activecolor} onChange={handlechange}/>
    </div>
  )
}

export default Child
