
import React from "react";
import { useNavigate } from "react-router-dom";


function ZipCode(){
    let navigate = useNavigate();
    return(
        <div>
            <h2 style={{textAlign: 'center'}}>Enter your zip-code here</h2>   
            <ul>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/allrestaurants"))}>Next </button></li>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/"))}>Back </button></li>
            </ul>
            {/* // this button is only for demo purposes */}
        </div>
    )
}


export default ZipCode;