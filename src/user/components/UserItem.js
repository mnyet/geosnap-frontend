import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/uiElements/Avatar'
import CardHover from '../../shared/components/uiElements/CardHover';

export default function UserItem(props) {
    return (
        <CardHover>
            <Link to={`/${props.id}/places`}>
                <div className='flex gap-5 p-5'>
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
        </CardHover>
    )
}
