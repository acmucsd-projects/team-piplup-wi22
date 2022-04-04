import React,{ useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const NavigationBar = () => {

    return (
        <>
            <div className='navBar'>
            <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                <Navbar.Brand>UCSD Events Tracker</Navbar.Brand>
                <Nav className = "ms-auto">                
                    <Nav.Link href={`/user/${localStorage.getItem('user')}`}>Profile</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/">Sign Out</Nav.Link>
                </Nav>
            </Navbar>
            </div>
        </>
    );

}

export default NavigationBar 