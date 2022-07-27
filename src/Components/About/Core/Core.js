import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Core.css'
const Core = () => {
    const [ceo, setCeo] = useState([])
    const [value, setValue] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ceo')
            .then(res => res.json())
            .then(data => setCeo(data[0]))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/corevalue')
            .then(res => res.json())
            .then(data => setValue(data))
    }, [])
    return (
        <div>
            <Container className='global-no'>
                <h1 className='c-g-1'>Global NO.1 BitMango!</h1>

                <div className='mt-4 mb-4'>
                    <p>BitMango is a global NO.1 game publisher that spreads fun games all around the world.</p>

                </div>
                <div className='mt-4 mb-4'>
                    <p>
                        Since its establishment in 2011, it has developed and published mobile puzzle games. <br />
                        In January 2019, in order to focus on each specialized capability, our game studio was separated into “Puzzle1studio” <br />
                        Now we are focusing on publishing mobile games.
                    </p>
                </div>
                <div className='mt-4 mb-4'>
                    <p>
                        As a result of developing and publishing games with a lot of know-how accumulated over 10 years, <br />
                        we have become a global game game publisher that stands out in the North American market.
                    </p>
                    <p>
                        We have the know-how to publish more than 50 games. We have developed Roll the Ball, which has been downloaded by more than 170 <br /> million global users, as well as Block! Hexa Puzzle, which is currently in the top ranks of puzzle games in North America. In particular, <br /> Wordcookies, a word game, was selected as Apple’s most popular games and apps of 2017, and has become a representative game for <br />the company and is loved by users around the world.
                    </p>
                </div>
                <h1 className='c-g-1'>CEO | {ceo.name}</h1>
                <img
                    src={ceo.img}
                    alt=''
                    className='mb-5 ceo-img'
                />

                <h1 className='c-g-1 mt-5'>Core Value</h1>
                <div className='row f-row g-5 core-box-div'>
                    {value.map(valu => <div className='col-3 core-box'>
                        <h3 className='mt-3 mb-5 core-title'>{valu.title}</h3>
                        <h5>{valu.description}</h5>
                    </div>)}
                </div>


            </Container>
        </div>
    );
};

export default Core;