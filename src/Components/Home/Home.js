import React from 'react';
import Slider from '../Slider/Slider';
import Achieved from './Achieved/Achieved';
import Featured from './Featured/Featured';
import Global from './Global/Global';
import Latest from './Latest/Latest';
import Positions from './Positions/Positions';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            <Achieved></Achieved>
            <Global></Global>
            <Latest></Latest>
            <Positions></Positions>
        </div>
    );
};

export default Home;