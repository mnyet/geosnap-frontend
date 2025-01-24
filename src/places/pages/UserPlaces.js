import React from 'react'
import Page from '../../shared/Page'
import { useParams } from 'react-router-dom'

export default function UserPlaces() {

  const dummy = [
    {
      id: 'p1',
      image: "https://i.pinimg.com/736x/45/c4/b0/45c4b0645f1a37e6cc9bc20b2a3db68d.jpg",
      title: "Empire State Building",
      description: "ganda dito mga verbs",
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

  useParams();

  return (
    <Page>
      {/* PlaceList.js */}
      {dummy.length === 0 ?
        <div className='p-10 flex flex-col gap-5 text-center'>
          <p className='text-2xl font-semibold'>No places yet</p>
        </div>
        :
        <ul className='p-5 flex flex-col gap-5'>
          {dummy.map((item) => {
            return (
              /* PlaceItem.js */
              /* key, id, image, title, description, address, creatorID, coordinates, postDate */
              /* <PlaceItem key={item.id} id={item.id} image={item.image} description={item.description} address={item.address} creatorID={item.creatorID} coordinates={item.coordinates}></PlaceItem>  */
              
              <div className='w-full flex justify-center'>
                <li className='w-10/12 lg:w-8/12 2xl:w-6/12 truncate drop-shadow-sm rounded-md bg-[#EAE8E5]'>

                {/* Inside of the card */}
                  <img className='image-container object-cover w-full h-96' src={item.image} alt={item.title} />

                  {/* Layout of the bottom part of the card (Descriptions and Actions and all) */}
                  <div className='details bg-primary-500 p-7 flex flex-col lg:flex-row lg:grid-rows-1 lg:grid-cols-2 gap-7 justify-between text-white'>

                    <div className='left flex flex-col pr-4 truncate content-center gap-3'>
                      <h2 className='font-bold text-2xl truncate' title={item.title}>{item.title}</h2>
                      <h3 className='font-normal text-lg text-wrap line-clamp-2'>{item.description}</h3>
                    </div>

                    <div className='right flex flex-col justify-between gap-3 mt-3 lg:mt-0 lg:items-end'>
                      <p>Date Created: {item.postDate}</p>
                      <div className='buttons font-semibold flex gap-5'>
                        <button>View on map</button>
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            )
          })}
        </ul>
      }
    </Page>
  )
}
