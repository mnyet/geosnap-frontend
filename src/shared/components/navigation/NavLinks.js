import React from 'react'

import { NavLink } from 'react-router-dom'

export default function NavLinks(props) {

    const linkStyle = 'p-4 rounded-md hover:bg-white hover:text-secondary-300 hover:shadow-md transition duration-300';

  return (
    <ul className='flex space-x-1 flex-col items-center lg:flex-row gap-10 lg:gap-0'>
        <li>
            <NavLink to='/' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`} exact>All Users</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>My Places</NavLink>
        </li>
        <li>
            <NavLink to='/places/new' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>Add Place</NavLink>
        </li>
        <li>
            <NavLink to='/auth' className={({ isActive }) => `${linkStyle} ${isActive ? 'bg-secondary-500' : ''}`}>Authenticate</NavLink>
        </li>
    </ul>
  )
}
