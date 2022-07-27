import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateHistory = () => {
    const [game, setGame] = useState({})
    const navigate = useNavigate()

    const handleYear = e => {
        const updateYear = e.target.value
        const updatehistory = { year: updateYear, title: game.title }
        setGame(updatehistory)

    }
    const handleTitle = e => {
        const updateTitle = e.target.value
        const updatehistory = { year: game.year, title: updateTitle }
        setGame(updatehistory)
    }

    // const handleItem1 = e => {
    //     const updateItem1 = e.target.value
    //     const updatehistory = { year: game.year, title: game.title, item1: updateItem1, item2: game.description.item2 }
    //     setGame(updatehistory)
    // }
    // const handleItem2 = e => {
    //     const updateItem2 = e.target.value
    //     const updatehistory = { year: game.year, title: game.title, item1: game.description.item1, item2: updateItem2 }
    //     setGame(updatehistory)
    // }
    const handleSubmit = e => {
        fetch(`http://localhost:5000/history/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(res => res.json())
            .then(data => {

                data.modifiedCount && navigate('/admin/addhistory')

            })

        e.preventDefault()
    }
    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:5000/history/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [id])
    return (
        <div>
            <h1>Update History {id}</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleYear} value={game.year || ''} className='add' placeholder='Year' /> <br />
                <input onChange={handleTitle} value={game.title || ''} className='add' placeholder='Title' /><br />
                {/* <textarea onChange={handleItem1} value={game.description.item1 || ''} className='add-t ' placeholder='Point-1' /><br />
                <textarea onChange={handleItem2} value={game.description.item2 || ''} className='add-t ' placeholder='Point-2' /><br /> */}
                <input className='sub-btn' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateHistory;