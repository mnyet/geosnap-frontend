import React from 'react'

export default function Avatar(props) {
  return (
    <img className='w-12 h-12 object-cover object-top bg-white rounded-full shadow-sm' src={props.image} alt={props.name} />
  )
}
