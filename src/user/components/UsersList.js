import React from 'react'
import UserItem from './UserItem'

export default function UsersList(props) {
    return (
        props.items.length === 0 ?
            <div className='p-10 flex flex-col gap-5 text-center'>
                <p className='text-2xl font-semibold'>No users found</p>
            </div>
            :
            <ul className='p-5 flex flex-col gap-5'>
                {props.items.map((user) => {
                    return (
                        /* UserItem.js */
                        <UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            image={user.image}
                            placeCount={user.places}
                        />
                    )
                })}
            </ul>
        
    )
}
