import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Featured.css'




const Featured = () => {

    const [fgames, setFgames] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/featuredgames')
            .then(res => res.json())
            .then(data => setFgames(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='f-text'>Our Featured Games</h1>
            <div className='row ms-5 me-5'>

                {
                    fgames.map(gmae => <div className='col'>
                        <img
                            src={gmae.img}
                            alt=""
                            className='fImg'
                        />
                        <h5 className='mt-3 text-dark'>{gmae.name}</h5>
                    </div>)
                }

            </div>

            <button className='btn-show'><Link className='link-jobs-btn' to='/games'>SHOW MORE GAMES</Link> </button>
            <hr className='mx-auto gr' />
        </div>
    );
};

export default Featured;