import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const AddCOO = () => {

    const [coo, setCoo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coo')
            .then(res => res.json())
            .then(data => setCoo(data[0]))
    }, [coo])

    const COODelete = id => {
        console.log(id)
        const url = `http://localhost:5000/coo/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/addcoo", data)
            .then(res => {
                console.log(res)
            })

        alert("CEO Successfully Added")
        reset()
    };
    return (
        <div>
            <h1>Add New COO</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add' placeholder='COO Name' {...register("name")} /> <br />
                <input className='add' placeholder='Img url' {...register("img")} /><br />

                <input type="submit" />
            </form>

            <h1 className='mt-5'>DELETE COO</h1>
            <h1 className='c-g-1'>CEO | {coo.name}</h1>
            <img
                src={coo.img}
                alt=''
                className='mb-5'
            />
            <button onClick={() => COODelete(coo._id)} className='dlt-btn'>DELETE COO</button>

        </div>
    );
};

export default AddCOO;