import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Work.css'


const Work = () => {
    const [coo, setCoo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coo')
            .then(res => res.json())
            .then(data => setCoo(data[0]))
    }, [])

    return (
        <div>
            <div className='work-banner'>
                <h className='hw'>How We Work</h>
            </div>
            <Container>
                <h2 className=' mb-5 ww'>Who We Are</h2>
                <h4 className=' ww'>COO| {coo.name}</h4>
                <img
                    src={coo.img}
                    alt=''
                    className='ceo-img'
                />
                <div className='video'>

                    <iframe className='wv' width="1120" height="630" src="https://www.youtube.com/embed/6smIjIbjXn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </Container>

        </div>
    );
};

export default Work;