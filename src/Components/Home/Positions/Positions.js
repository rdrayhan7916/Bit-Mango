import React, { useEffect, useState } from 'react';
import './Positions.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Positions = () => {
    const [positions, setPositions] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/positions')
            .then(res => res.json())
            .then(data => setPositions(data))
    }, [])

    return (
        <div>
            <h1 className='f-text'>Open Positions</h1>

            <Container>
                <div className='row f-row'>
                    {
                        positions.map(position => <div className='col'>
                            <img
                                src={position.img}
                                alt=""
                            />
                            <h6>{position.name}</h6>
                        </div>)
                    }
                </div>
            </Container>
            <button className='btn-job'><Link className='link-jobs-btn' to="/jobs" >VIEW JOBS LISTINGS</Link></button>


        </div>
    );
};

export default Positions;