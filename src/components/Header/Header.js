import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import  logo from '../img/logo.png';
import './Header.css'



const Header = () => {
    const {user} = useAuth()
    return (
        <>
            <Navbar bg="white"  collapseOnSelect  expand="lg" className="sticky-top" >
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="nav-tag " active={{
                            color: "#207EF7"
                        }} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="nav-tag " active={{
                            color: "#207EF7"
                        }} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="nav-tag " active={{
                            color: "red"
                        }} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={Link} className="nav-tag " active={{
                            color: "red"
                        }} to="/doctors"><i class="fas fa-user"></i> {user.displayName}</Nav.Link>
                        {user?.email ?  <button className="btn btn-regular">Login</button> :
                         <button className="btn btn-regular">LogOut</button>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;