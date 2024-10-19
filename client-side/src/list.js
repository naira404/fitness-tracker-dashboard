import React from "react";
import { useState } from "react";
export default function User(){
     const [state,setstate] =useState([{name:"ahmed",job:"bb"},{name:"ali",job:"bb"},{name:"many",job:"kk"}])
     function chang(){
        setstate("ali");
     }
    return (<>
     <ul>
        { state.map((n)=>{
         return <li>{state.name}</li>
       })}

      </ul>
    </>)
}