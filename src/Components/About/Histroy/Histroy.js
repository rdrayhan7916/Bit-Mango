import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Histroy.css'
const Histroy = () => {
    const [histroy, setHistroy] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/history')
            .then(res => res.json())
            .then(data => setHistroy(data))
    }, [])

    return (
        <div className='histroy'>
            <Container className='global-no'>
                <h1 className=''>History</h1>

                {
                    histroy.map(his => <div className='histroy-part'>
                        <h2 className='tion'>{his.year}</h2>
                        <h3 className='h-title'>{his.title}</h3>
                        <ul>
                            <li>
                                {his.description?.item1}
                            </li>
                            {his.description.item2 && <li>
                                {his.description?.item2}
                            </li>}
                            {his.description.item3 && <li>
                                {his.description?.item3}
                            </li>}
                        </ul>
                    </div>
                    )
                }

            </Container >
        </div >
    );
};

export default Histroy;