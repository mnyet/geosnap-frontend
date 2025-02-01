import React from 'react'
import { useParams } from 'react-router-dom'
import Page from '../../shared/Page';
import Card from '../../shared/components/uiElements/Card';
import Button from '../../shared/components/formElements/Button';
import Input from '../../shared/components/formElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

export default function UpdatePlace() {

    const dummy = [
        {
            id: 'p1',
            image: "https://i.pinimg.com/736x/45/c4/b0/45c4b0645f1a37e6cc9bc20b2a3db68d.jpg",
            title: "Empire State Building",
            description: "ganda dito mga verbsganda dito mga verbsganda dito mga verbsganda dito mga verbsganda dito mga verbs",
            address: "20 W 34th St., New York, NY 10001, United States",
            coordinates: {
                lat: 40.748586774889674,
                long: -73.98554638586603
            },
            creatorID: 'u1',
            postDate: "1-13-2025"
        },
        {
            id: 'p2',
            image: "https://i.pinimg.com/736x/45/c4/b0/45c4b0645f1a37e6cc9bc20b2a3db68d.jpg",
            title: "Empire State Buildinasdasdasdasdasdg",
            description: "ganda dito mga verbs ganda dito mga verbsganda dito mga verbsganda dito mga verbsganda dito mga verbs",
            address: "20 W 34th St., New York, NY 10001, United States",
            coordinates: {
                lat: 40.748586774889674,
                long: -73.98554638586603
            },
            creatorID: 'u2',
            postDate: "1-13-2025"
        },
        {
            id: 'p2',
            image: "https://i.pinimg.com/736x/45/c4/b0/45c4b0645f1a37e6cc9bc20b2a3db68d.jpg",
            title: "Empire State wiwi",
            description: "ganda dsdddddmga verbsganda dito mga verbsganda dito mga verbsganda dito mga verbs",
            address: "20 W 34th St., New York, NY 10001, United States",
            coordinates: {
                lat: 40.748586774889674,
                long: -73.98554638586603
            },
            creatorID: 'u7',
            postDate: "1-13-2025"
        }
    ]

    const placeId = useParams().placeId;

    const identifiedPlace = dummy.find(place => place.id === placeId);

    const [formState, inputHandler] = useForm({
        title:{
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true);

    const placeSubmitUpdateHandler = (event) => {
        event.preventDefault();
        console.log("Method: Update", formState.inputs)
    }

    return (
        <Page>
            {!identifiedPlace ? (
                <div className='p-5 flex flex-col gap-5'>
                    <Card>
                        <div className='p-5 flex flex-col text-center'>
                            <p className='text-2xl mb-5 font-semibold text-wrap'>Could not find place!</p>
                            <Button to="/">Go Back</Button>
                        </div>
                    </Card>
                </div>
            ) : (
                <div className='flex flex-col gap-5 justify-center items-center pt-10'>
                    <h1 className='text-xl font-bold'>Update a place</h1>
                    <form onSubmit={placeSubmitUpdateHandler} className='flex flex-col gap-3 place-form list-none mx-0 my-auto p-4 w-10/12 max-w-[50rem] shadow-md rounded-md bg-white '>
                        <Input
                            id="title"
                            element="input"
                            type="text"
                            label="Title"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid title."
                            onInput={inputHandler}
                            initialValue={formState.inputs.title.value}
                            initialValid={formState.inputs.title.isValid}
                        />
                        <Input
                            id="description"
                            element="textarea"
                            label="Description"
                            validators={[VALIDATOR_MINLENGTH(5)]}
                            errorText="Please enter a valid description (at least 5 characters)."
                            onInput={inputHandler}
                            initialValue={formState.inputs.description.value}
                            initialValid={formState.inputs.description.isValid}
                        />
                        <Button type="submit" disabled={!formState.isValid}>Update place</Button>
                    </form>
                </div>
            )}
        </Page>
    )
}
