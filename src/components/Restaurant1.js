import React from "react";
import { useNavigate } from "react-router-dom";
import Table from './Table'




function Restaurant1(){
    let navigate = useNavigate();
    const table1 = new Table(1, true);
    const table2 = new Table(2, true);
    const table3 = new Table(3, true);
    const table4 = new Table(4, true);

    const handleClick = () =>{
        console.log('you have selected table: ' + table1.tableID)
    }

    const handleClick2 = () =>{
        console.log('you have selected table: ' + table2.tableID)
    }

    const codeGenerator = () =>{
        console.log('you have selected table: ' + 'your code to present to hostess is: ' + Math.floor(100000 + Math.random() * 900000));
    }

    // need to come up with a smarter way of doing this. 
    // This is displaying in console but we don't want to have 10+ handleClick/codeGenerator or however many tables we have
    
    return(
       <div class="taco">
           <h1 style={{textAlign: 'center'}}>Taco Place</h1>
           <ul>
                <li style={{textAlign: 'center'}}>SELECT</li>
                <li style={{textAlign: 'center'}}><button onClick={ codeGenerator}>SELECT</button></li> 
           </ul>
           <ul>
               <li style={{textAlign: 'center'}}>table2</li>
               <li style={{textAlign: 'center'}}><button onClick={handleClick2}>SELECT</button></li> 
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