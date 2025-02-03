import React from 'react'

export default function FormContainer(props) {
  return (
    <form
        onSubmit={props.onSubmit}
        className='flex flex-col gap-3 place-form list-none mx-0 my-auto p-5 w-10/12 max-w-[50rem] shadow-md rounded-md bg-white'
    >
        {props.children}
    </form>
  )
}
