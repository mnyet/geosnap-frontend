import React from 'react'

export default function Page(props) {
  return (
    <div className='bg-background-950 min-h-screen flex flex-col'>
        {props.children}
    </div>
  )
}
