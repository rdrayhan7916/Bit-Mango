import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
const AddCEO = () => {
    const [ceo, setCeo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ceo')
            .then(res => res.json())
            .then(data => setCeo(data[0]))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/addceo", data)
            .then(res => {
                console.log(res)
            })

        alert("CEO Successfully Added")
        reset()
    };

    const CEODelete = id => {
        console.log(id)
        const url = `http://localhost:5000/ceo/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }

    return (
        <div>

            <h1>Add New CEO</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add' placeholder='CEO Name' {...register("name")} /> <br />
                <input className='add' placeholder='Img url' {...register("img")} /><br />
                <input type="submit" />
            </form>
            <h1 className='mt-5'>DELETE CEO</h1>
            <h1 className='c-g-1'>CEO | {ceo.name}</h1>
            <img
                src={ceo.img}
                alt=''
                className='mb-5'
            />
            <button onClick={() => CEODelete(ceo._id)} className='dlt-btn'>DELETE CEO</button>

        </div>
    );
};

export default AddCEO;