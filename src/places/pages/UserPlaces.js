import React from 'react'
import Page from '../../shared/Page'
import { useParams } from 'react-router-dom'
import Card from '../../shared/components/Card';
import Button from '../../shared/components/formElements/Button';

export default function UserPlaces() {

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
    }
  ]

  // Pulls the :userID from the URL from App.js.
  const userID = useParams().userId;

  // Creates a dummy data for the places to load in the page.
  // Filters the dummy data to only show the places that have the same creatorID as the userID.
  const loadedPlaces = dummy.filter(place => place.creatorID === userID);

  return (
    <Page>
      {/* PlaceList.js */}
      {loadedPlaces.length === 0 ?
        <div className='p-5 flex flex-col gap-5'>
          <Card>
            <div className='p-5'>
              <p className='text-2xl text-center font-semibold text-wrap'>No places found. Maybe create one?</p>
              <button className='w-full bg-secondary-500 text-white font-semibold py-2 rounded-md shadow-sm mt-5 hover:bg-primary-950 hover:text-secondary-400'>Share Place</button>
            </div>
          </Card>
        </div>
        :
        <ul className='p-5 flex flex-col gap-5'>
          {loadedPlaces.map((item) => {
            return (
              /* PlaceItem.js */
              /* key, id, image, title, description, address, creatorID, coordinates, postDate */
              /* <PlaceItem key={item.id} id={item.id} image={item.image} description={item.description} address={item.address} creatorID={item.creatorID} coordinates={item.coordinates}></PlaceItem>  */

              <Card>
                {/* Inside of the card */}
                <img className='image-container object-cover w-full h-96' src={item.image} alt={item.title} />

                {/* Layout of the bottom part of the card (Descriptions and Actions and all) */}
                <div className='details bg-primary-500 p-7 flex flex-col lg:flex-row lg:grid-rows-1 lg:grid-cols-2 gap-7 justify-between text-white'>

                  <div className='left flex flex-col pr-4 truncate content-center gap-3'>
                    <h2 className='font-bold text-2xl truncate' title={item.title}>{item.title}</h2>
                    <h3 className='font-normal text-lg text-wrap line-clamp-2'>{item.description}</h3>
                  </div>

                  <div className='right flex flex-col justify-between gap-3 mt-3 lg:mt-0 lg:items-end'>
                    <p className='font-semibold'>Date Created: {item.postDate}</p>
                    <div className='buttons font-semibold items-center flex gap-2'>
                      <Button>View on map</Button>
                      <Button to={`/places/${item.id}`}>Edit</Button>
                      <Button danger>Delete</Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </ul>
      }
    </Page>
  )
}
