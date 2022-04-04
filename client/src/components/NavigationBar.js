import React,{ useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useLocation } from 'react-router-dom'

export const NavigationBar = () => {

    //window.location.pathname === '/' || window.location.pathname === '/create-account'
    const [login, setLogin] = useState(false);
    const location = useLocation();
    
    useEffect( () => {
        if(location.pathname === '/create-account' || location.pathname === '/'){
            setLogin(false)
        }
        else{
            setLogin(true)
        }
    },[location])

    if(login === false){
        return(
            <div className='navBar'>
            <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                <Navbar.Brand>UCSD Events Tracker</Navbar.Brand>
            </Navbar>
            </div> 
        )
    }
    else{
        return (
            <>
                <div className='navBar'>
                <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                    <Navbar.Brand>UCSD Events Tracker</Navbar.Brand>
                    <Nav className = "ms-auto">                
                        <Nav.Link href={`/user/${localStorage.getItem('user')}`}>Profile</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/" onClick ={() => (localStorage.setItem('user',''))}>Sign Out</Nav.Link>
                    </Nav>
                </Navbar>
                </div>
            </>
        );
    }

}

export default NavigationBar 