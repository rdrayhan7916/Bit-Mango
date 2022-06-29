import React, { useEffect, useState } from 'react';
import './Banner.css'
const Banner = () => {
    const [banner, setBanner] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/abanner')
            .then(res => res.json())
            .then(data => setBanner(data[0]))
    }, [])



    return (
        <div className='about-banner'>
            <div className=''>
                <img src={banner.img} alt='' className='a-img' />
            </div>
            <div>
                <h1 className='a-we'>{banner.title}</h1>

            </div>

        </div>
    );
};

export default Banner;