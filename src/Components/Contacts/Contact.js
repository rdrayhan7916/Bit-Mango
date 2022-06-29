import React from 'react';
import './Contact.css'
import { Container } from 'react-bootstrap';
const Contact = () => {
    return (
        <div>
            <div className='contact-banner'>
                <h1 className='j-text'>CONTACT US</h1>
            </div>
            <Container>
                <div className='row con-dec'>
                    <div className='col con-text'>
                        <h3>CUSTOMER SUPPORT</h3><br />
                        <p>FAQs and other important information</p>
                    </div>
                    <div className='col'>
                        <button className='c-btn'>CUSTOMER SERVICE</button><br /><br />
                        <button className='co-btn'>PARTNERSHIP</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;