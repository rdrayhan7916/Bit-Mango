import React, { useEffect } from 'react';
import banner from '../../img/game-banner.jfif'
import './Games.css'

import { useState } from 'react';
import Game from './Game';

const Games = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/games")
            .then(res => res.json())
            .then(data => setGames(data))
    }, [games])

    return (
        <div>
            <div className='game-banner'>
                <img
                    src={banner}
                    alt=''
                    className='game-img'
                />
            </div>

            <div>

                <div className='row gx-5 gy-5 gm'>


                    {
                        games.map(game => <Game
                            game={game}
                            key={game.name}
                        ></Game>

                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default Games;