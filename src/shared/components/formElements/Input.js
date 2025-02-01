import React, { useReducer, useEffect } from 'react'
import { validate } from '../../util/validators';

import './Input.css';

function inputReducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

export default function Input(props) {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    // useEffect Destructuring
    const { id, onInput } = props; // Destructuring the props object
    const { value, isValid } = inputState; // Destructuring the inputState object

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    }

    const formStyle = 'w-full bg-gray-100 border border-secondary-500 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent';

    const element = props.element === 'input' ? (
        <input 
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            className={formStyle}
            onChange={changeHandler}
            value={inputState.value}
            onBlur={touchHandler}
        />
    ) : (
        <textarea
            id={props.id}
            rows={props.rows || 3}
            className={formStyle}
            onChange={changeHandler}
            value={inputState.value}
            onBlur={touchHandler}
        />
    )

    return (
        <div className={`form-control ${props.className} ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id} className='text-sm font-semibold'>{props.label}</label>
            <br />
            {element /* Renders the element dynamically depending on the need */}
            {!inputState.isValid && inputState.isTouched && <p className='text-xs text-red-500 pt-1'>{props.errorText}</p>}
        </div>
    )
}
