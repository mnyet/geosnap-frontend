import React from 'react'

export default function MainHeader(props) {
  return (
    <header className='bg-primary-400 text-text-900 drop-shadow-sm flex justify-between items-center py-6 px-10 lg:px-20'>
        {props.children}
    </header>
  )
}
