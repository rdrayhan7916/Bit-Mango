import React from 'react';
import { Container } from 'react-bootstrap';
import COO from '../../img/COO.png'
import './Work.css'
const Work = () => {
    return (
        <div>
            <div className='work-banner'>
                <h className='hw'>How We Work</h>
            </div>
            <Container>
                <h2 className=' mb-5 ww'>Who We Are</h2>
                <h4 className=' ww'>COO| James Cho</h4>
                <img
                    src={COO}
                    alt=''
                />
            </Container>
        </div>
    );
};

export default Work;