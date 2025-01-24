import React from 'react'

export default function Card(props) {
  return (
    <div className='bg-[#EAE8E5] rounded-md shadow-sm hover:bg-accent-600 text-text-200 hover:text-white hover:shadow-md transition duration-300'>
        {props.children}
    </div>
  )
}
