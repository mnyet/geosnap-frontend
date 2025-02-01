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
            image: "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
            title: "Empire State Building",
            description: "An iconic skyscraper in New York City, offering stunning panoramic views from its observatory decks. A must-visit landmark for tourists and architecture lovers alike.",
            address: "20 W 34th St., New York, NY 10001, United States",
            coordinates: {
                lat: 40.748817,
                long: -73.985428
            },
            creatorID: 'u1',
            postDate: "1-13-2025"
        },
        {
            id: 'p2',
            image: "https://hips.hearstapps.com/hmg-prod/images/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-royalty-free-image-1722542465.jpg?resize=980:*",
            title: "Eiffel Tower",
            description: "The world-famous symbol of Paris, standing at 330 meters tall. Visitors can enjoy breathtaking city views from the top and explore nearby attractions like the Champs de Mars.",
            address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
            coordinates: {
                lat: 48.8588443,
                long: 2.2943506
            },
            creatorID: 'u2',
            postDate: "1-13-2025"
        },
        {
            id: 'p3',
            image: "https://www.thecolosseum.org/wp-content/uploads/colosseum-inside-optimized.jpg",
            title: "Colosseum",
            description: "A historic amphitheater in Rome, Italy, known for its rich history and ancient gladiator battles. One of the greatest architectural wonders of the Roman Empire.",
            address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
            coordinates: {
                lat: 41.8902102,
                long: 12.4922309
            },
            creatorID: 'u7',
            postDate: "1-13-2025"
        }
    ]

    const placeId = useParams().placeId;

    const identifiedPlace = dummy.find(place => place.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
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
