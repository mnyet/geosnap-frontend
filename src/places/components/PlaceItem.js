import React, { useContext, useState } from 'react'
import Card from '../../shared/components/uiElements/Card'
import Button from '../../shared/components/formElements/Button'
import Modal from '../../shared/components/uiElements/Modal';
import Map from '../../shared/components/uiElements/Map';
import { AuthContext } from '../../shared/context/auth-context';

export default function PlaceItem(props) {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const [showDelete, setShowDelete] = useState(false);

  const showDeleteHandler = () => setShowDelete(true);

  const cancelDeleteHandler = () => setShowDelete(false);

  const executeDelete = () => {
    console.log('Deleted');
    setShowDelete(false);
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <div className='flex justify-end gap-2 w-full px-5'>
            <Button inverse to={`https://maps.google.com/?q=${props.coordinates.lat},${props.coordinates.long}`}>See on Google Maps</Button>
            <Button danger onClick={closeMapHandler}>Close</Button>
          </div>
        }
      >
        <div className='map-container h-80 bg-gray-500 text-white w-full'>
          <Map coordinates={props.coordinates} title={props.title} />
        </div>
      </Modal>

      <Modal
        show={showDelete}
        onCancel={cancelDeleteHandler}
        header={"Are you sure?"}
        footer={
          <div className='flex justify-end gap-2 w-full px-5'>
            <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
            <Button danger onClick={executeDelete}>Delete</Button>
          </div>
        }
      >
        <div className='flex justify-center text-center p-7'>
          <p className='text-lg'>Do you want to proceed and delete this place? Do note that this can't be undone.</p>
        </div>
      </Modal>

      <Card>
        {/* Inside of the card */}
        <img className='image-container object-cover w-full h-96' src={props.image} alt={props.title} />

        {/* Layout of the bottom part of the card (Descriptions and Actions and all) */}
        <div className='details bg-primary-500 p-7 flex flex-col lg:flex-row lg:grid-rows-1 lg:grid-cols-2 gap-7 justify-between text-white'>
          <div className='left flex flex-col pr-4 truncate content-center gap-3'>
            <h2 className='font-bold text-2xl truncate' title={props.title}>{props.title}</h2>
            <h3 className='font-normal text-lg text-wrap line-clamp-2'>{props.description}</h3>
          </div>

          <div className='right flex flex-col justify-between gap-3 mt-3 lg:mt-0 lg:items-end'>
            <p className='font-semibold'>Date Created: {props.postDate}</p>
            <div className='buttons font-semibold items-center flex gap-2'>
              <Button inverse onClick={openMapHandler}>View on map</Button>
              {auth.isLoggedIn &&
                <>
                  <Button inverse to={`/places/${props.id}`}>Edit</Button>
                  <Button danger onClick={showDeleteHandler}>Delete</Button>
                </>
              }
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  )
}
