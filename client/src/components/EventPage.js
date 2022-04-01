import React, { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import NavigationBar from './NavigationBar.js'

export const EventPage = (props) => {
    const { id } = useParams();
    
    useEffect(() => {

    });
    return (
    <>
        <NavigationBar/>

        <div className = 'containerEvent'>
            <div className = 'eventPage'>
                <div>{id}</div>
                <div className = 'eventPageTitle'>{props.title}</div>
            </div>
        </div>
    </>

  )
}


export default EventPage 
