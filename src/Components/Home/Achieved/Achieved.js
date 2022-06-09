import React from 'react';
import './Achieved.css'
import A1 from '../../../img/스크린샷-2022-04-21-오전-9.46.05.png'
import A2 from '../../../img/스크린샷-2022-04-21-오전-9.46.15.png'
import A3 from '../../../img/스크린샷-2022-04-21-오전-9.47.20.png'
import { Container } from 'react-bootstrap';

const Achieved = () => {
    return (
        <div>
            <h1 className='a-text'>What We'ev Achieved?</h1>
            <div className='text-center a-title'>
                <h3>We Helps Stduios</h3>
                <h3>Create Hit Games!</h3>
            </div>
            <div className='mt-4 mb-4'>
                <p>Global game publisher, BitMango!<br /> We Help studios create hit games.</p>

            </div>
            <div className='mt-4 mb-4'>
                <p>
                    BitMango is a global game publisher that spreads fun games all around the world. <br />
                    After our game studio was separated into “Puzzle1studio” in 2019, we are focusing on publishing mobile games
                </p>
            </div>
            <div className='mt-4 mb-4'>
                <p>
                    As a result of developing and publishing games with a lot of know-how accumulated over 10 years, <br />
                    we have become a global game game publisher that stands out in the North American market. <br />
                    As a pronounced global game publisher, we are working passionately every day to pursue sustainable growth.
                </p>
            </div>
            <Container>
                <div className='row activity'>

                    <div className='col '>
                        <img
                            src={A1}
                            alt=''
                        />
                        <h1 className='gain'>2.7M+</h1>
                        <h3>Daily Active Users</h3>
                    </div>
                    <div className='col'>
                        <img
                            src={A2}
                            alt=''
                        />
                        <h1 className='gain pt-2'>710M+</h1>
                        <h3>Cumulative Downloads</h3>
                    </div>
                    <div className='col'>
                        <img
                            src={A3}
                            alt=''
                        />
                        <h1 className='gain'>200+</h1>
                        <h3 className=''>
                            Global Launching Countries</h3>
                    </div>
                </div>
            </Container>

            <button className='btn-show'>LEARN MORE</button>
            <hr className='mx-auto' />
        </div>
    );
};

export default Achieved;