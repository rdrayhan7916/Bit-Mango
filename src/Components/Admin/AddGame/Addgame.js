import React, { useEffect, useState } from 'react';
import './AddGame.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Addgame = () => {

    const { register, handleSubmit, reset } = useForm();
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/games")
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    }, [games])

    const gameDelete = id => {
        const url = `http://localhost:5000/games/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
        alert("Game Successfully Deleted")
    }


    const onSubmit = data => {
        axios.post("http://localhost:5000/addgame", data)
            .then(res => {
                console.log(res)
            })

        alert("Game Successfully Added")
        reset()
    };
    return (
        <div>
            <h1>Add New Game</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add' placeholder='Game Name' {...register("name", { required: true })} /> <br />
                <input className='add' placeholder='Img url' {...register("img", { required: true })} /><br />
                <textarea className='add-t ' placeholder='Description'  {...register("description", { required: true })} /><br />
                <input className='sub-btn' type="submit" />
            </form>

            <h1>Game Mange</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Game Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {games.map(game => <tr><th scope="row">{game._id.slice(-3)}</th>
                        <td>{game.name}</td>
                        <td>
                            <img
                                src={game.img}
                                alt=''
                                className='dlt-img' />
                        </td>
                        <td>
                            <Link to={`updategame/${game._id}`}> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>

                            <button onClick={() => gameDelete(game._id)} type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button>

                        </td> </tr>)}



                </tbody>
            </table>



        </div>
    );
};

export default Addgame;