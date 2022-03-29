// this will be the page were the user is directed to after the zip code screen
//  have a link that links to every restaurant

import React from "react";
import { useNavigate } from "react-router-dom";
function AllRestaurants(){
    let navigate = useNavigate();
    return(
        <div class="container">
            <header style={{textAlign: 'center'}}>Restaurants in your area!</header>
            <ul>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/restaurant1"))} > Taco Shop </button></li>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/restaurant2"))} > Pizza Place </button></li>
                <li style={{textAlign: 'center'}}><button onClick={() =>(navigate("/restaurant3"))} > BBQ Joint </button></li>
            </ul>  
            <ul>
           <li><button onClick={() =>(navigate("/zipcode"))}>Back </button></li>

           </ul>
        </div>
    )

}

export default AllRestaurants