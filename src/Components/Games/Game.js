import React from 'react';
import google from '../../img/google-play.png'
import apple from '../..//img/apple-ios.png'
const Game = ({ game }) => {
    const { name, img, description } = game
    return (
        <div className='col-5 d-flex justify-content-between ms-5'>
            <div className=''>
                <img
                    src={img}
                    alt=""

                />
            </div>
            <div className='ms-5'>
                <h4 className='text-start'>{name}</h4>
                <p className='text-start'>{description}</p>

                <div className='d-flex justify-content-between'>
                    <a href='www.google.com' target="balank">
                        <img
                            src={google}
                            alt=""
                            className=' me-2'
                        />
                    </a>
                    <a href='www.google.com' target="balank">
                        <img
                            src={apple}
                            alt=""
                            className=' me-2'
                        />
                    </a>
                </div>


            </div>
        </div>
    );
};

export default Game;