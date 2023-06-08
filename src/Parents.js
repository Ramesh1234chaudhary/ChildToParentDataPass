import React, { useState } from 'react'
import Child from './Child'
import "./Style.css"
const Parents = () => {
    const [uicolor,setUicolor]=useState(null)
    
    const getcolor=(color)=>{
        setUicolor(color);
      
    }
    

    return(
    <div className='App'>
       <div className='style' style={{background:`${uicolor}`}}>
         
       </div>
         <Child getcolor={getcolor}/>
    </div>
  )
}

export default Parents
