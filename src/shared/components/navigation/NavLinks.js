import React, { useContext } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

export default function NavLinks(props) {

    const nav = useNavigate();
    const auth = useContext(AuthContext); // Object pulled from App.js
    const linkStyle = 'p-3 rounded-md hover:bg-white hover:text-secondary-300 hover:shadow-md transition duration-300';

    return (
        <ul className='flex space-x-1 flex-col items-center lg:flex-row gap-10 lg:gap-2'>
            {/*
            <li>
                <button className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`} onClick={auth.isLoggedIn ? auth.logout : auth.login}>Force {auth.isLoggedIn ? 'Log out' : 'Log in'}</button>
            </li>
            */}
            <li>
                <NavLink to='/' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>All Users</NavLink>
            </li>
            {auth.isLoggedIn &&
                <>
                    <li>
                        <NavLink to='/u1/places' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>My Places</NavLink>
                    </li>
                    <li>
                        <NavLink to='/places/new' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>Add Place</NavLink>
                    </li>
                    <button onClick={() => {
                        auth.logout();
                        nav('/');
                    }} className='text-red-400 p-1 hover:text-white transition duration-300'>Log Out</button>
                </>
            }
            {!auth.isLoggedIn &&
                <li>
                    <NavLink to='/auth' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>Authenticate</NavLink>
                </li>
            }
        </ul>
    )
}
