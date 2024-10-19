import React from "react";
import { Link } from "react-router-dom";



function Navbar(){
    return(<>
    
       <div className="nav">
        <div className="logo">
         <Link to="/">logo </Link>
        </div>

         <div className="links">
             
             <Link to="/profile" > Sara jeff </Link>

         </div>
       </div>
    
    
    
    </>)

}
export default Navbar;