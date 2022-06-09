import React from 'react';
import './Latest.css'
import { Container } from 'react-bootstrap';
import lImg1 from '../../../img/심명훈.jpg'
import lImg2 from '../../../img/2021-할로윈비트망고.jpg'
import lImg3 from '../../../img/기술블로그비트망고.jpg'

const Latest = () => {
    return (
        <div>
            <h1 className='f-text'>Latest Posts</h1>
            <Container>
                <div className='row '>
                    <div className='col'>
                        <img
                            src={lImg1}
                            alt=""
                            className='limg'
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={lImg2}
                            alt=""
                            className='limg'
                        />
                    </div>
                    <div className='col'>
                        <img
                            src={lImg3}
                            alt=""
                            className='limg'
                        />
                    </div>
                </div>
            </Container>
            <hr className='mx-auto gr' />
        </div>
    );
};

export default Latest;