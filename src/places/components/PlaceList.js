import React from 'react'
import Card from '../../shared/components/uiElements/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/formElements/Button'

export default function PlaceList(props) {
  return (
    props.items.length === 0 ?
      <div className='p-5 flex flex-col gap-5'>
        <Card>
          <div className='p-5'>
            <p className='text-2xl mb-5 text-center font-semibold text-wrap'>No places found. Maybe create one?</p>
            <Button>Share Place</Button>
          </div>
        </Card>
      </div>
      :
      <ul className='p-5 flex flex-col gap-5'>
        {props.items.map((item) => {
          return (
            /* PlaceItem.js */
            /* key, id, image, title, description, address, creatorID, coordinates, postDate */
            /* <PlaceItem key={item.id} id={item.id} image={item.image} description={item.description} address={item.address} creatorID={item.creatorID} coordinates={item.coordinates}></PlaceItem>  */
            <PlaceItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              address={item.address}
              creatorID={item.creatorID}
              coordinates={item.coordinates}
              postDate={item.postDate}
            />
          )
        })}
      </ul>
  )
}
