import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddFetureGame = () => {
    const { register, handleSubmit, reset } = useForm();
    const [fgames, setFgames] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/featuredgames')
            .then(res => res.json())
            .then(data => setFgames(data))
    }, [])
    const fGameDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/fgamedlt/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
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

                <input type="submit" />
            </form>
            <h1 className='f-text'> Featured Games Delete</h1>
            <div className='row ms-5 me-5'>

                {
                    fgames.map(gmae => <div className='col'>
                        <img
                            src={gmae.img}
                            alt=""
                            className='fImg'
                        />
                        <h5 className='mt-3 text-dark'>{gmae.name}</h5>
                        <button onClick={() => fGameDelete(gmae._id)} className='dlt-btn'>DELETE</button>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AddFetureGame;