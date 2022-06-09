import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/BitmangoCI1-1-removebg-preview.png'
import country from '../../img/download (1).png'
const Header = () => {
    return (
        <div>
            <Navbar className='ms-5 mt-2' collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Brand href="#home">
                    <img
                        src={logo}

                        className="d-inline-block align-top"
                        alt="LOGO"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link href="#features">ABOUT US</Nav.Link>
                        <Nav.Link href="#pricing">GAMES</Nav.Link>
                        <Nav.Link href="#features">HOW WE WORK</Nav.Link>
                        <Nav.Link href="#pricing">PUBLISHING</Nav.Link>
                        <Nav.Link href="#features">JOBS</Nav.Link>
                        <Nav.Link href="#pricing">CONTACT</Nav.Link>
                        <Nav.Link href="#features">
                            <img
                                src={country}

                                className="d-inline-block"
                                alt="LOGO"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;