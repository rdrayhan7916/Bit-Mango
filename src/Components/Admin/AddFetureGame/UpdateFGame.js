import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateFGame = () => {
    const [game, setGame] = useState({})
    const navigate = useNavigate()
    const handleName = e => {
        const updateName = e.target.value
        const updateGame = { name: updateName, img: game.img }
        setGame(updateGame)

    }
    const handleImg = e => {
        const updateImg = e.target.value
        const updateGame = { name: game.name, img: updateImg }
        setGame(updateGame)
    }


    const handleSubmit = e => {
        fetch(`http://localhost:5000/featuredgames/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(res => res.json())
            .then(data => {

                data.modifiedCount && navigate('/admin/addfgame')

            })

        e.preventDefault()
    }
    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:5000/featuredgames/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [id])
    return (
        <div>
            <h1>Updated Id : {id}</h1>
            <h1>Update Game</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleName} value={game.name || ''} className='add' placeholder='Game Name' /> <br />
                <input onChange={handleImg} value={game.img || ''} className='add' placeholder='Img url' /><br />
                <input className='sub-btn' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateFGame;