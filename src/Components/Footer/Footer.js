import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../src/img/BitmangoCI1-1-removebg-preview.png'
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='row gx-5'>
                    <div className='col'>

                        <img
                            src={logo}
                            alt=""
                            className='f-logo'
                        />
                    </div>
                    <div className='col f-com'>
                        <h5>Company</h5>
                        <Link className='f-link' to='about'>About Us</Link> <br />
                        <Link className='f-link' to='games'>Games</Link><br />
                        <Link className='f-link' to='work'>How we work</Link><br />
                        <Link className='f-link' to='publishing'>Publishing</Link><br />
                        <Link className='f-link' to='jobs'>Jobs</Link> <br />
                        <Link className='f-link' to='contact'>Contact</Link>


                    </div>
                    <div className='col f-com'>
                        <h5>Links</h5>
                        <Link to='' className='f-link'>Terms of service</Link><br />
                        <Link to='' className='f-link'>Privacy policy</Link>

                    </div>
                    <div className='col'>
                        <i class="fa-brands fa-facebook me-2"></i><i class="fa-brands fa-youtube-square me-2"></i><i class="fa-brands fa-linkedin me-2"></i><i class="fa-brands fa-instagram-square me-2"></i>
                    </div>
                </div>
            </Container>
            <hr className='mx-auto footer-hr' />
            <p className='text-start ms-5'>© Bitmango. All Rights Reserved</p>
        </div>
    );
};

export default Footer;