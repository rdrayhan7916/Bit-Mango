import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AddHistory = () => {

    const [year, setYear] = useState('')
    const [title, setTitle] = useState('')
    const [item1, setItem1] = useState('')
    const [item2, setIrem2] = useState('')
    const [histroy, setHistroy] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/history')
            .then(res => res.json())
            .then(data => setHistroy(data))
    }, [histroy])

    const historyDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/historydlt/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }

    const data = {
        year: year,
        title: title,
        description: {
            item1: item1,
            item2: item2
        }
    }
    const handleSubmit = (e) => {
        axios.post("http://localhost:5000/addhistory", data)
            .then(res => {
                console.log(res)
            })

        alert("History Successfully Added")
        e.preventDefault()
        document.getElementById("his").reset()


    }
    return (
        <div>
            <h1>Add New History</h1>
            <form id='his' onSubmit={handleSubmit}>
                <input onBlur={(e) => { setYear(e.target.value) }} placeholder='Year' className='add' type="text" name='year' /><br />
                <input onBlur={(e) => { setTitle(e.target.value) }} placeholder='Title' className='add' type="text" name='title' /><br />
                <input onBlur={(e) => { setItem1(e.target.value) }} placeholder='Point-1' className='add' type="text" name='item1' /><br />
                <input onBlur={(e) => { setIrem2(e.target.value) }} placeholder='Point-2' className='add' type="text" name='item2' /><br />
                <input className='sub-btn' type='submit' />
            </form>

            <h1 className=''>History Delete</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Year</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {histroy.map(game => <tr><th scope="row">{game._id.slice(-3)}</th>
                        <td>{game.year}</td>
                        <td>{game.title}</td>

                        <td>
                            <Link to={`updatehistory/${game._id}`}> <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></Link>
                            <button onClick={() => historyDelete(game._id)} type="button" className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i></button>

                        </td> </tr>)}



                </tbody>
            </table>




        </div>
    );
};

export default AddHistory;