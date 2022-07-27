import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddFetiredGame.css'
import { Link } from 'react-router-dom';


const AddFetureGame = () => {
    const { register, handleSubmit, reset } = useForm();
    const [fgames, setFgames] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/featuredgames')
            .then(res => res.json())
            .then(data => setFgames(data))
    }, [fgames])
    const fGameDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/fgamedlt/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
        alert("Featured Game Successfully Deleted")
    }

    const onSubmit = data => {
        axios.post("http://localhost:5000/featuredgame", data)
            .then(res => {
                console.log(res)
            })

        alert("Featured Game Successfully Added")
        reset()
    };
    return (
        <div>
            <h1>Add Featured Game</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add' placeholder='Featured Game Name' {...register("name")} /> <br />
                <input className='add' placeholder='Img url' {...register("img")} /><br />

                <input className='sub-btn' type="submit" />
            </form>
            <table className="table table-dark table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Game Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {fgames.map(game => <tr><th scope="row">{game._id.slice(-3)}</th>
                        <td>{game.name}</td>

                        <td>
                            <Link to={`updatefgame/${game._id}`}> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>
                            <button onClick={() => fGameDelete(game._id)} type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button>

                        </td> </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default AddFetureGame;