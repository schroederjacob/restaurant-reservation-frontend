import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage(){
    let navigate = useNavigate();
    return(
        <div>
            <header>Welcome to the Restaurant Reservation App!</header>
            <ul>
                <li><button onClick={() =>(navigate("/zipcode"))}> Guest </button></li>
                <li><button onClick={() =>(navigate("/login"))}> Employee </button></li>
            </ul>  
        </div>
    )
}

export default MainPage