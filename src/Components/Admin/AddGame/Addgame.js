import React, { useState } from 'react';
import './AddGame.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Addgame = () => {

    const { register, handleSubmit, reset } = useForm();

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
        </div>
    );
};

export default Addgame;