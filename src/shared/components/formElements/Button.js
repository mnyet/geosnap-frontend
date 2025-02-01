import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button(props) {

    //const defaultButtonDark = 'border hover:bg-white border-secondary-300 hover:text-secondary-300 rounded-md p-2 hover:shadow-md transition duration-300';
    const defaultButton = 'w-full bg-secondary-500 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-primary-950 hover:text-secondary-400 border border-secondary-400 hover:shadow-md transition duration-300'
    const inverseButton = 'bg-white text-secondary-300 hover:bg-secondary-300 hover:text-white rounded-md p-2 hover:shadow-md transition duration-300';
    const dangerButton = 'border text-white border-red-600 bg-red-500 hover:bg-white hover:text-red-500 rounded-md p-2 hover:shadow-md transition duration-300';

    // If the button is a link
    if (props.href) {
        return (
            <a href={props.href}
                className=''>
                {props.children}
            </a>
        )
    }

    // If the button is a <Link />
    if (props.to) {
        return (
            <Link
                className={`${props.danger ? dangerButton : props.inverse ? inverseButton : defaultButton}`}
                to={props.to}
                exact={props.exact}
            >
                {props.children}
            </Link>
        )
    }

    // If the button is a normal button
    return (
        <button className={`${props.danger ? dangerButton : props.inverse ? inverseButton : defaultButton} button--disabled `}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
