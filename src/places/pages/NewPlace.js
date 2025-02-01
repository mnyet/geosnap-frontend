import React from 'react'
import Page from '../../shared/Page'
import Input from '../../shared/components/formElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Button from '../../shared/components/formElements/Button'
import { useForm } from '../../shared/hooks/form-hook'

export default function NewPlace() {

  const [formState, inputHandler] = useForm(
    {
      /* Initialize the state of each form */
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  )

  const placeSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Method: Create", formState.inputs) // sends the data to the backend
  }

  return (
    <Page>
      <div className='flex flex-col gap-5 justify-center items-center pt-10'>
        <h1 className='text-xl font-bold'>Create a new place</h1>
        <form onSubmit={placeSubmitHandler} className='flex flex-col gap-3 place-form list-none mx-0 my-auto p-4 w-10/12 max-w-[50rem] shadow-md rounded-md bg-white '>
          <Input
            id='title'
            element='input'
            type='text'
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id='description'
            element='textarea'
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input
            id='address'
            element='input'
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Button type='submit' disabled={!formState.isValid}>
            Add Place
          </Button>
        </form>
      </div>
    </Page>
  )
}
