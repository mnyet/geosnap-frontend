import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/Avatar'
//import Card from '../../shared/components/Card';

export default function UserItem(props) {
    return (
        <div className='w-full flex justify-center'>
            <li className='p-5 w-10/12 lg:w-8/12 2xl:w-6/12 truncate drop-shadow-sm bg-[#EAE8E5] rounded-md shadow-sm hover:bg-accent-600 text-text-200 hover:text-white hover:shadow-md transition duration-300'>
                <Link to={`/${props.id}/places`}>
                    <div className='flex gap-5'>
                        {/* User profile picture */}
                        <div className='shrink-0'>
                            <Avatar image={props.image} name={props.name} />
                        </div>
                        {/* User details */}
                        <div className='truncate'>
                            <h2 className='text-xl font-normal truncate'>{props.name}</h2>
                            <h3 className='text-sm font-semibold truncate'>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                        </div>
                    </div>
                </Link>
            </li>
        </div>
    )
}
