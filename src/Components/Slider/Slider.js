import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../../img/images-xhnh.jfif'
import secendImg from '../../img/images (1).jfif'
import thirdImg from '../../img/images (2).jfif'
const Slider = () => {
    return (
        <div className=''>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={firstImg}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={secendImg}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdImg}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;