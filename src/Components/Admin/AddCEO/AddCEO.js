import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
const AddCEO = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ceo, setCeo] = useState([])
    const [coo, setCoo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ceo')
            .then(res => res.json())
            .then(data => setCeo(data[0]))
    }, [ceo])

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



    const onSubmit1 = data => {
        axios.post("http://localhost:5000/addcoo", data)
            .then(res => {
                console.log(res)
            })

        alert("CEO Successfully Added")
        reset()
    };

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
                <input className='sub-btn mb-5' type="submit" />
            </form>
            <h1>Add New COO</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <input className='add' placeholder='COO Name' {...register("name")} /> <br />
                <input className='add' placeholder='Img url' {...register("img")} /><br />

                <input className='sub-btn mb-5' type="submit" />
            </form>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Game Name</th>
                        <th scope="col">Titele</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr><th scope="row">1</th>
                        <td>{ceo.name}</td>
                        <td>CEO</td>

                        <td>
                            <button type="button" className="btn btn-primary">UPDATE</button>
                            <button onClick={() => CEODelete(ceo._id)} type="button" className="btn btn-danger ms-2">DELETE</button>

                        </td> </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{coo.name}</td>
                        <td>COO</td>

                        <td>
                            <button type="button" className="btn btn-primary">UPDATE</button>
                            <button onClick={() => COODelete(coo._id)} type="button" className="btn btn-danger ms-2">DELETE</button>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddCEO;