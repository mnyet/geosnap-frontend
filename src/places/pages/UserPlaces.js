import React from 'react'
import Page from '../../shared/Page'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList';

export default function UserPlaces() {

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
