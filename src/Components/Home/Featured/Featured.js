import React from 'react';
import './Featured.css'
import f1 from '../../../img/191108-ICON-@hkyoon.png'
import f2 from '../../../img/A_512-4.png'
import f3 from '../../../img/1024-1024x1024.png'
import f4 from '../../../img/icon_valentain_512-e1651132813314.jpg'



const Featured = () => {
    return (
        <div className='mt-5'>
            <h1 className='f-text'>Our Featured Games</h1>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <img
                        src={f1}
                        alt=""
                        className='fImg'
                    />
                    <h5 className='mt-3 text-dark'>Word Cookies®</h5>
                </div>
                <div>
                    <img
                        src={f2}
                        alt=""
                        className='fImg'
                    />
                    <h5 className='mt-3 text-dark'>Roll the Ball® - slide puzzle</h5>
                </div>
                <div>
                    <img
                        src={f3}
                        alt=""
                        className='fImg'
                    />
                    <h5 className='mt-3 text-dark'>Lollipop & Marshmallow <br /> Match3</h5>
                </div>
                <div>
                    <img
                        src={f4}
                        alt=""
                        className='fImg'
                    />
                    <h5 className='mt-3 text-dark'>Bubble Pop Origin! Puzzle <br /> Game</h5>
                </div>
            </div>
            <button className='btn-show'>SHOW MORE GAMES</button>
            <hr className='mx-auto gr' />
        </div>
    );
};

export default Featured;