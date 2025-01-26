import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {

    const buttonStyle = 'border hover:bg-white hover:text-secondary-300 rounded-md p-2 hover:shadow-md transition duration-300';
    const dangerButton = 'hover:bg-white hover:text-red-500 rounded-md p-2 hover:shadow-md transition duration-300';

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
                className={buttonStyle}
                to={props.to}
                exact={props.exact}
            >
                {props.children}
            </Link>
        )
    }

    // If the button is a normal button
    return (
        <button className={buttonStyle + `${props.danger && dangerButton}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
