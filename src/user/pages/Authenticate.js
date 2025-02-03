import React, { useContext, useState } from 'react'
import Page from '../../shared/Page'
import Input from '../../shared/components/formElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Button from '../../shared/components/formElements/Button'
import FormContainer from '../../shared/components/formElements/FormContainer'
import { AuthContext } from '../../shared/context/auth-context'
import { useNavigate } from 'react-router-dom'

export default function Authenticate() {

    const auth = useContext(AuthContext);
    const nav = useNavigate();

    const [formState, inputHandler, setFormData] = useForm(
        {
            /* Initialize the state of each form */
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    )

    const loginHandler = (event) => {
        event.preventDefault();

        if (isLoginMode) {
            console.log("Method: Login", formState.inputs) // sends the data to the backend
            console.log("Email:", formState.inputs.email.value)
            console.log("Password:", formState.inputs.password.value)
            auth.login();
            nav('/');
        } else {
            console.log("Method: Sign up", formState.inputs) // sends the data to the backend
            console.log("Name:", formState.inputs.name.value)
            console.log("Email:", formState.inputs.email.value)
            console.log("Password:", formState.inputs.password.value)
        }
    }

    const [isLoginMode, setIsLoginModeMode] = useState(true);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false)
        }

        setIsLoginModeMode(lastState => !lastState)
    };

    return (
        <Page>
            <div className='flex flex-col gap-5 justify-center items-center pt-10'>
                <h1 className='text-2xl font-bold'>{isLoginMode ? 'Log in' : 'Create an account'} to GeoSnap</h1>
                <FormContainer onSubmit={loginHandler}>
                    {!isLoginMode && (
                        <Input
                            id='name'
                            element='input'
                            type='text'
                            label='Name'
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a name for your profile."
                            onInput={inputHandler}
                        />
                    )}
                    <Input
                        id='email'
                        element='input'
                        type='text'
                        label="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter an email."
                        onInput={inputHandler}
                    />
                    <Input
                        id='password'
                        element='input'
                        type='password'
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(8)]}
                        errorText="Please enter at least 8 characters."
                        onInput={inputHandler}
                    />
                    <Button type='submit' disabled={!formState.isValid}>
                        {isLoginMode ? 'Log in' : 'Sign up'}
                    </Button>

                    <Button inverse type='button' onClick={switchModeHandler}>Switch to {isLoginMode ? 'Sign up' : 'Log In'}</Button> {/* Prevents adding type='button' this Button from submitting while staying within the form container */}
                </FormContainer>
            </div>
        </Page>
    )
}
