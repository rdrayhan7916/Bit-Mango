import React, { useEffect, useState } from 'react';
import './Latest.css'
import { Container } from 'react-bootstrap';

const Latest = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/latestposts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1 className='f-text'>Latest Posts</h1>
            <Container>
                <div className='row'>
                    {
                        posts.map(post =>
                            <div key={post._id} className='col'>
                                <img
                                    src={post.img}
                                    alt=""
                                    className='limg'
                                />
                            </div>)
                    }
                </div>
            </Container>
            <hr className='mx-auto gr' />
        </div>
    );
};

export default Latest;