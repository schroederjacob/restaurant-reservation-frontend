import React from "react";
import { useNavigate } from "react-router-dom";



function Restaurant2(){
    let navigate = useNavigate();
    
    return(
       <div class="container">
           <h1 style={{textAlign: 'center'}}>Pizza Place</h1>
           <ul>
               <li style={{textAlign: 'center'}}>Table1</li> <li style={{textAlign: 'Left'}}>Test Table</li>
               <li style={{textAlign: 'center'}}><button>SELECT</button></li> <li style={{textAlign: 'Left'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'right'}}>Table5</li>
               <li style={{textAlign: 'right'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'center'}}>Table 2</li>
               <li style={{textAlign: 'center'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'center'}}>Table 3</li>
               <li style={{textAlign: 'center'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'center'}}>Table 4</li>
               <li style={{textAlign: 'center'}}><button>SELECT</button></li> 
           </ul>
           <ul>
           <li><button onClick={() =>(navigate("/allrestaurants"))}>Back </button></li>

           </ul>
           

       </div>
    
    );
}

export default Restaurant2;