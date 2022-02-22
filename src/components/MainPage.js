import PropTypes from 'prop-types'
import Button from './Button'
import React, { Component }  from 'react';


const MainPage = ({title}) => {
    return (
        <header class = 'header'>
            <h1 >{title}</h1>
            <Button color='orange' text='Customer' />
            <Button color='orange' text='Employee'/>
        </header>
    )
}

//style={{color: 'green', backgroundColor: 'blue'}}

MainPage.defaultProps = {
    title:'Welcome To The Restaurant App'
}

MainPage.propTypes = {
    title: PropTypes.string,
}

export default MainPage