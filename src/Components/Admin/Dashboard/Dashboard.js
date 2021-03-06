import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
    return (

        <div className='row ad'>
            <div className='col-3 addminRoute'>
                <nav className="nav flex-column">
                    <Link to="addgame" className='ne-link'> Game Mange</Link>
                    <Link to="addfgame" className='ne-link'>Mange Featured Game</Link>
                    <Link to="addceo" className='ne-link'> CEO and COO Mange</Link>

                    <Link to="addcore" className='ne-link'> Core Value Mange</Link>
                    <Link to="addhistory" className='ne-link'> History Mange</Link>
                </nav>
            </div>
            <div className='col-9'>
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;