import PropTypes from 'prop-types'
import Button from './Button'
import React, { Component }  from 'react';

const Header = ({title}) => {
    return (
        <header class = 'header'>
            <h1 >{title}</h1>
            <Button color='Blue' text='Customer'/>
            <Button color='Blue' text='Employee'/>
        </header>
    )
}