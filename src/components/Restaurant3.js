import React from "react";
import { useNavigate } from "react-router-dom";



function Restaurant3(){
    let navigate = useNavigate();
    
    return(
       <div class="square">
           <h1 style={{textAlign: 'center'}}>BBQ Joint</h1>
           <ul>
               <li style={{textAlign: 'center'}}>Table1</li>
               <li style={{textAlign: 'center'}}><button>SELECT</button></li> 
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
           <li><button onClick={() =>(navigate("/zipcode"))}>Back </button></li>

           </ul>
           

       </div>
    
    );
}

export default Restaurant3;