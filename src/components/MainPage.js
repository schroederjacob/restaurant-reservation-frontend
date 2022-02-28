import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from "react-router-dom";
    

// const MainPage = ({title}) => (
const MainPage = () => (
    <header class = 'header'>
        <h1>title</h1>
        <div></div>
        {/* <Button color = 'orange' text='Guest'/> */}
        {/* <Button color='orange' text='Employee'/> */}   
    </header>
);



// const MainPage = () =>{

//         return (
//         <header class = 'header'>
//             <div></div>
//             <button color='orange' text='Guest' onClick={'/components/ZipCode'}></button>
//             <Button color='orange' text='Employee'/>
            
//         </header>)
// }


//style={{color: 'green', backgroundColor: 'blue'}}

// MainPage.defaultProps = {
//     title:'Welcome To The Restaurant App'
// }

// MainPage.propTypes = {
//     title: PropTypes.string,
// }

// MainPage.style = {
//     display: "inline-block",
//     width: "200px",
//     height: "200px",
// }

export default MainPage