import PropTypes from 'prop-types'
import React, { Component }  from 'react';


const Button = ({color, text}) => {
    return <button style={{ backgroundColor: color}} className='btn'>{text}</button>
    
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes ={
    text:PropTypes.string,
    color: PropTypes.string,
}


// left off on events in the walkthrough
export default Button