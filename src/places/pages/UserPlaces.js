import React from 'react'
import Page from '../../shared/Page'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList';

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

  // Pulls the :userID from the URL from App.js.
  const userID = useParams().userId;

  // Creates a dummy data for the places to load in the page.
  // Filters the dummy data to only show the places that have the same creatorID as the userID.
  const loadedPlaces = dummy.filter(place => place.creatorID === userID);

  return (
    <Page>
      {/* PlaceList.js */}
      <PlaceList items={loadedPlaces} />
    </Page>
  )
}
