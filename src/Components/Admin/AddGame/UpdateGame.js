
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const UpdateGame = () => {
    const [game, setGame] = useState({})
    const navigate = useNavigate()
    const handleName = e => {
        const updateName = e.target.value
        const updateGame = { name: updateName, img: game.img, description: game.description }
        setGame(updateGame)

    }
    const handleImg = e => {
        const updateImg = e.target.value
        const updateGame = { name: game.name, img: updateImg, description: game.description }
        setGame(updateGame)
    }

    const handleDes = e => {
        const updateDes = e.target.value
        const updateGame = { name: game.name, img: game.img, description: updateDes }
        setGame(updateGame)
    }
    const handleSubmit = e => {
        fetch(`http://localhost:5000/games/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(res => res.json())
            .then(data => {

                data.modifiedCount && navigate('/admin')

            })

        e.preventDefault()
    }
    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:5000/games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [id])

    return (
        <div>
            <h1>Update Game</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleName} value={game.name || ''} className='add' placeholder='Game Name' /> <br />
                <input onChange={handleImg} value={game.img || ''} className='add' placeholder='Img url' /><br />
                <textarea onChange={handleDes} value={game.description || ''} className='add-t ' placeholder='Description' /><br />
                <input className='sub-btn' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateGame;