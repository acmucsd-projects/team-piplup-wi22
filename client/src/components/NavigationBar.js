import React,{ useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavigationBar = () => {

    return (
        <>
            <div className='navBar'>
            <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
            
                <Navbar.Brand>UCSD</Navbar.Brand>
                <Nav>

                    {/*
                        have to make sure we include colon for using id in urls later
                    */}                    
                    <Nav.Link href="/user/id">Profile</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                        <Nav.Link href="/">Sign Out</Nav.Link>
                </Nav>


            </Navbar>
            </div>
        </>
    );

}

export default NavigationBar