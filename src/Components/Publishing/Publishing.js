import React from 'react';
import './Publishing.css'
import grimg from '../../img/great-game.jpg'
import diff from '../../img/diff.png'
import partner from '../../img/partners.png'
import analysis from '../../img/analysis.png'
import marketing from '../../img/marketing.png'
import { Container } from 'react-bootstrap';
const Publishing = () => {
    return (
        <div>
            <div className='pb-banner'>
                <h1 className='a-we'>Take the first step</h1>
                <h2 className='p-hit'>to global success with BitMango!</h2>
                <button className='btn-sub'>SUBMIT YOUR GAME</button>
            </div>
            <Container>
                <div className='row mt-5'>
                    <div className='col-6 creat-dec'>
                        <h2>We help studios create great games.</h2>
                        <p>With more than 3.7 million users daily, and almost 900 million downloads with our 100 + games, we are a successful game publisher.</p>
                        <p>We are now looking for amazing studios who can partner with us to publish great games and make them successful globally. Join us in our exciting journey to make your great games available to global users.</p>
                    </div>
                    <div className='col-6'>
                        <img
                            src={grimg}
                            alt=""
                            className='grimg'
                        />
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <img
                            src={diff}
                            alt=""
                            className=''
                        />
                    </div>
                    <div className='col-8 creat-dec'>
                        <h2>
                            We are different</h2>
                        <p>Having worked with other developer studios, we know that finding a publisher that respects you is quite a challenging process. We hear stories about publishers stealing developers’ ideas to make their own game, and about uneven shares in the royalties.</p>
                        <p>BitMango is committed to putting your concerns to rest, and we do our best to support your games as best as possible. Our goal is to find long-term PARTNERS, rather than one-time-collaboration developers. </p>
                    </div>
                </div>
                <div>
                    <h1 className='wcw'>
                        What can we provide that others don’t?</h1>
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={partner}
                                alt=""
                            />
                            <h1 className='mt-5 mb-3 icon'><i class="fa-solid fa-star"></i></h1>
                            <h4>Long-Lasting Partners</h4>
                            <p>Ever submitted a game, only to have 3 days of marketing campaigns run in a rush? We hear you. We carry out 2 weeks of marketing, and we give you plenty of time to adjust your game beforehand.</p>
                        </div>
                        <div className='col'>
                            <img
                                src={analysis}
                                alt=""
                            />
                            <h1 className='mt-5 mb-3 icon'><i class="fa-solid fa-star"></i></h1>
                            <h4>Game Analysis</h4>
                            <p>But do you do these adjustments alone?? Of course not! We have teams of people who look into the core fun factors and another to look at the potential business factors of your game. At your request or need, we also give out UA creative guides and UX guides, to help make your game thrive.</p>
                        </div>
                        <div className='col'>
                            <img
                                src={marketing}
                                alt=""
                            />
                            <h1 className='mt-5 mb-3 icon'><i class="fa-solid fa-star"></i></h1>
                            <h4>Marketing</h4>
                            <p>Once we reach global launching, you will be working with the best puzzle game UA specialists out there. We tune many of our games on a weekly basis strictly based on data. We are constantly carrying out various in-house projects to help devise the best marketing strategies for you. We don’t settle; we continuously update objectives for each game to expand them to their true potential.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Publishing;