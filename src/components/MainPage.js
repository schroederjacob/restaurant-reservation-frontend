import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage(){
    let navigate = useNavigate();
    return(
        <div>
            <header style={{textAlign: 'center'}}>Welcome to the Restaurant Reservation App!</header>
            <ul>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/zipcode"))} > Guest </button></li>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/loginbutton"))}> Employee </button></li>
            </ul>  
        </div>
    )
}

export default MainPage