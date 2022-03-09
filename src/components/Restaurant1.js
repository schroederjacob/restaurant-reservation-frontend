import React from "react";
import { useNavigate } from "react-router-dom";



// function onButtonClickHandler(){
//     window.alert('You have selected this table for your reservation!')


function Restaurant1(){
    let navigate = useNavigate();

    // onButtonClickHandler = () => {
    //     window.alert('You have selected this table for your reservation!')
    //   };

    


    return(
       <div class="square">
           <h1 style={{textAlign: 'center'}}>Taco Place</h1>

           {/* <ul>
               <li style={{textAlign: 'left'}}>Table 5</li>
               <li style={{textAlign: 'left'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'left'}}>Table 6</li>
               <li style={{textAlign: 'left'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'right'}}>Table 7</li>
               <li style={{textAlign: 'right'}}><button>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'right'}}>Table 8</li>
               <li style={{textAlign: 'right'}}><button>SELECT</button></li> 
           </ul> */}

           <ul>
               <li style={{textAlign: 'center'}}>Table 1</li>
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

export default Restaurant1;