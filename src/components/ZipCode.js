
import React from "react";
import { useNavigate } from "react-router-dom";


function ZipCode(){
    let navigate = useNavigate();
    return(
        <div>
            <h2>Enter your zip-code here</h2>   
            <ul>
                <li><button onClick={() =>(navigate("/restaurant1"))}>Next </button></li>
                <li><button onClick={() =>(navigate("/"))}>Back </button></li>
            </ul>
            {/* // this button is only for demo purposes */}
        </div>
    )
}


export default ZipCode;