import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Addcore = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/corevalue')
            .then(res => res.json())
            .then(data => setValue(data))
    }, [value])
    const coreDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/coredlt/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/addcore", data)
            .then(res => {
                console.log(res)
            })

        alert("Core Value Successfully Added")
        reset()
    };
    return (
        <div>
            <h1>Add Core Value</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add' placeholder='Title' {...register("title")} /> <br />
                <input className='add' placeholder=' Description' {...register("description")} /><br />
                <input type="submit" />
            </form>
            <h1 className=' mt-5'>Core Value Delete</h1>
            <div className='row g-5 core-box-div'>
                {value.map(valu => <div className='col-3 core-box'>
                    <h3 className='mt-3 mb-5 core-title'>{valu.title}</h3>
                    <h5>{valu.description}</h5>
                    <button onClick={() => coreDelete(valu._id)} className='dlt-btn'>DELETE</button>
                </div>)}
            </div>
        </div>
    );
};

export default Addcore;