import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Game Name</th>

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {value.map(game => <tr><th scope="row">{game._id.slice(-3)}</th>
                        <td>{game.title}</td>

                        <td>
                            <Link to={`updatecore/${game._id}`}> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>
                            <button onClick={() => coreDelete(game._id)} type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button>

                        </td> </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Addcore;