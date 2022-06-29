import React, { useEffect, useState } from 'react';
import './Jobs.css'
import { Container } from 'react-bootstrap';
const Jobs = () => {
    const [mJobs, setmJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/mjobs')
            .then(res => res.json())
            .then(data => setmJobs(data))
    }, [])
    return (
        <div>
            <div className='j-banner'>
                <h1 className='j-text'>Ready to be inspired?</h1>

            </div>
            <Container className='nd'>
                <div className='bnt-grp'>
                    <button className='jb-btn'>All </button>
                    <button className='jb-btn'>Progrmmer </button>
                    <button className='jb-btn'>Marketing </button>
                    <button className='jb-btn'>Customer Expreience </button>
                </div>

            </Container>
            <div>
                <Container>
                    <h1 className='pro-text'>
                        Programmer
                    </h1>
                </Container>
                <hr className='mx-auto' />
            </div>
            <Container >
                <div className='row'>
                    <div className='col'>
                        <h4 className='pro-text'>Platform Programmer</h4>
                    </div>
                    <div className='col'>
                        <button className='pro-btn'>SEE MORE</button>
                    </div>
                </div>
            </Container>
            <div>
                <Container>
                    <h1 className='pro-text'>
                        Marketing
                    </h1>
                </Container>
                <hr className='mx-auto' />
            </div>
            <Container >
                {
                    mJobs.map(mjob =>
                        <div className='row'>
                            <div className='col'>
                                <h4 className='pro-text'>{mjob.jobName}</h4>
                            </div>
                            <div className='col'>
                                <button className='pro-btn'>SEE MORE</button>
                            </div>
                        </div>
                    )
                }
            </Container>
            <div>
                <Container>
                    <h1 className='pro-text'>
                        Customer Experience
                    </h1>
                </Container>
                <hr className='mx-auto' />
            </div>
            <Container >
                <div className='row'>
                    <div className='col'>
                        <h4 className='pro-text'>QA Specialist</h4>
                    </div>
                    <div className='col'>
                        <button className='pro-btn'>SEE MORE</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h4 className='pro-text'>QA Partner</h4>
                    </div>
                    <div className='col'>
                        <button className='pro-btn'>SEE MORE</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Jobs;