import { createContext, useState } from "react";

export let glabaldata = createContext();

function DataProvider({children}){


 

    const[task,setTask]=useState("")

    const [editBtn,seteditBtn]=useState(true)
    const [editinputData,seteditinputData]=useState(null)

    

    return <glabaldata.Provider value={{task,setTask,editBtn,seteditBtn,editinputData,seteditinputData}}>
        {children}
    </glabaldata.Provider>
}
export default DataProvider;
