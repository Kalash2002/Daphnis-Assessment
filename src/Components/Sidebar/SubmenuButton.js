import "./sidebar.css";
import React,{useState} from 'react'

function Button({title}){
  const [state,setState]=useState(false);
console.log("props",title);
  const handleFunction=()=>{
    setState(prev=>!prev);
    console.log(state);
    }

    return(
        <>
         <li><button className={`${state?"sidebar-subcat-click-btn":"sidebar-subcat-btn"}`}  onClick={handleFunction}>{title}</button></li>
        </>
    );
}

export default Button
