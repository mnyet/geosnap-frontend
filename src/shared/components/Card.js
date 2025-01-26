import React from 'react'

export default function Card(props) {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-10/12 lg:w-8/12 2xl:w-6/12 truncate drop-shadow-sm rounded-md bg-[#EAE8E5]'>
        {props.children}
      </div>
    </div>
  )
}
