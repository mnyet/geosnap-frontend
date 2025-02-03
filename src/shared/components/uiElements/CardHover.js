import React from 'react'

export default function CardHover(props) {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-10/12 lg:w-8/12 2xl:w-6/12 truncate drop-shadow-sm bg-[#EAE8E5] rounded-md shadow-sm hover:bg-accent-600 text-text-200 hover:text-white hover:shadow-md transition duration-300'>
                {props.children}
            </div>
        </div>)
}
