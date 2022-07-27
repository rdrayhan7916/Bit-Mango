import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const UpdateCore = () => {
    const [game, setGame] = useState({})
    const navigate = useNavigate()
    const handleTitle = e => {
        const updateName = e.target.value
        const updateCore = { title: updateName, description: game.description }
        setGame(updateCore)

    }
    const handleDes = e => {
        const updateDec = e.target.value
        const updateCore = { title: game.title, description: updateDec }
        setGame(updateCore)
    }


    const handleSubmit = e => {
        fetch(`http://localhost:5000/corevalue/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(res => res.json())
            .then(data => {

                data.modifiedCount && navigate('/admin/addcore')

            })

        e.preventDefault()
    }
    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:5000/corevalue/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [])
    return (
        <div>
            <h1>Core Id {id} </h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTitle} value={game.title || ''} className='add' placeholder='Game Name' /> <br />
                <input onChange={handleDes} value={game.description || ''} className='add' placeholder='Img url' /><br />
                <input className='sub-btn' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateCore;