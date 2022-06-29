import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/BitmangoCI1-1-removebg-preview.png'
import country from '../../img/download (1).png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar className='ms-5 mt-2' collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Brand >
                    <Link to='home'>
                        <img
                            src={logo}

                            className="d-inline-block align-top me-5"
                            alt="LOGO"
                        />
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items w-100">

                        <Nav.Link className='me-5' >
                            <Link to='/about' className='link'> ABOUT US</Link></Nav.Link>
                        <Nav.Link className='me-5' ><Link to='games' className='link'> GAMES</Link></Nav.Link>
                        <Nav.Link className='me-5'><Link to='work' className='link'> HOW WE WORK</Link></Nav.Link>
                        <Nav.Link className='me-5'><Link to='publishing' className='link'> PUBLISHING</Link></Nav.Link>
                        <Nav.Link className='me-5' ><Link to='jobs' className='link'> JOBS</Link></Nav.Link>
                        <Nav.Link className='me-5'><Link to='contact' className='link'> CONTACT</Link></Nav.Link>
                        {/* <Nav.Link className='me-5'><Link to='login' className='link'> Login</Link></Nav.Link> */}
                        <Nav.Link className='me-5' >
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