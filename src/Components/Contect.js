import React, { useState ,useEffect} from 'react'
import  { useContext } from 'react'
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";
import { glabaldata } from './Context1'
import "./Style.css"

  // to get data from local storage
    const getLocalItems=()=>{
     let lists=localStorage.getItem("list")
        console.log(lists)

        if(lists){
          return  JSON.parse (localStorage.getItem("list"));
        }else{
          return [];
        }
    }
  
const Contect = () => {
    
    const { task,setTask,seteditBtn, editBtn,seteditinputData,editinputData } = useContext(glabaldata)
    const [data,setData]=useState(getLocalItems());
    const [search,setSearch]=useState();

    
    const handlesubmit=()=>{ 
      if (task==="" || task.length<3){
          alert("Enter your Task")
        }  
        else if(task && !editBtn){
          setData(data.map((ele)=>{
                  if(ele.id === editinputData){
                     return {...ele,task:task}
                  }
                  return ele;
          }))
  
          setTask(" ")
          
          seteditBtn(true)
          seteditinputData(null)
        }  
        else{
          setData([
            ...data,{
            task: task,
            id: Date.now()}
          ])
          setTask(" ")
           
   
        }  
      }  

      const  deletehandle=(id)=>{
        const newlist = data.filter((ele) => {
          return ele.id !== id
      })
      setData(newlist)
     
      }
   
       const edithandle=(id)=>{
        const newEditdata = data.find((ele) => {
          return ele.id === id
      }) 
      console.log(newEditdata)
      seteditBtn(false)
      setTask(newEditdata.task)
      
      seteditinputData(id)
       }

       const searchhanlde=()=>{
        const newsearch=data.filter((e)=>{
         return e.task.toLowerCase().includes(search.toLowerCase());
        })
        setData(newsearch);
        setSearch("");
      }
       
       const handlecheck=(id) =>{
        seteditBtn(true)
       }
          
         // add data to local storage
          
           useEffect(()=>{
          localStorage.setItem("list",JSON.stringify(data))
           },[data])



    return (
        <div className='wrapper'>
        <div >
     <div className='input-field'>
      <input type="text" placeholder='add task'   className='add' value={task} onChange={(e)=>setTask(e.target.value)}/>

      { 
        editBtn ? <button onClick={handlesubmit} className='addbutton'>add</button>: <button className='edit' onClick={handlesubmit}>edit</button>
       }
       <input type="text"  placeholder="search by task"  className='search' value={search} onChange={(e)=>setSearch(e.target.value)} /> 
       <button onClick={searchhanlde} className='buttonsearch'>search</button>
    
       </div>
           <div className='main'>
            

    { 
        data && data.map((ele,id)=>{
            return ( 
                          
               <div key={id} className='main2' Draggable>
                <h6>{ele.task}</h6>
              <button className='btn2' onClick={ () =>deletehandle(ele.id) }><img src='https://img.icons8.com/?size=1x&id=Z4E8zfBYWTyB&format=gif' width={"30px"}/> </button>
               <button className='btn3' onClick={ () =>edithandle(ele.id) }><img src='https://img.icons8.com/?size=1x&id=tKvnEzfDG1hI&format=gif'width={"30px"}/></button> 
             </div>
             
            
            )
        })
    }
  
    </div>
    
    
    </div>
    </div> 
    
  )
  


  
  
}

export default Contect
