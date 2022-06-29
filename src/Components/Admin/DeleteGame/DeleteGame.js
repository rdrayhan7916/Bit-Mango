import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './DeleteGame.css'
import google from '../../../img/google-play.png'
import apple from '../../../img/apple-ios.png'


const DeleteGame = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/games")
            .then(res => res.json())
            .then(data => setGames(data))
    }, [games])

    const gameDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/games/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }

    return (
        <div>
            <div>
                <Container>

                    {
                        games.map(game => <div className='row gm'>
                            <div className='col-3 '>
                                <img
                                    src={game.img}
                                    alt=""
                                />
                            </div>
                            <div className='col-9 game-dec'>
                                <h3>{game.name}</h3>
                                <p className=' des mt-3 mb-4'>{game.description}</p>

                                <a href="www.google.com" target="_blank">
                                    <img
                                        src={google}
                                        alt=""
                                        className='me-3'
                                    />
                                </a>
                                <a href="www.google.com" target="_blank">
                                    <img
                                        src={apple}
                                        alt=""
                                    />
                                </a>
                                <button onClick={() => gameDelete(game._id)} className='dlt-btn'>DELETE</button>
                            </div>

                        </div>

                        )
                    }

                </Container>
            </div>
        </div>
    );
};

export default DeleteGame;