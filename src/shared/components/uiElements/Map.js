import React, { useEffect, useRef } from 'react'
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet CSS (Important)
import markerIconPng from "leaflet/dist/images/marker-icon.png"


export default function Map(props) {

    const mapRef = useRef(null);

    useEffect(() => {
        const map = mapRef.current = leaflet.map('map').setView([props.coordinates.lat, props.coordinates.long], 17);

        const pinIcon = leaflet.icon({
            iconUrl: markerIconPng,
            iconSize: [30, 50],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        });

        leaflet
            .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

        leaflet.marker([props.coordinates.lat, props.coordinates.long], {icon: pinIcon}).addTo(map)
            .bindPopup(props.title)
            .openPopup();

        return () => {
            map.remove();
        }
    }, [props.coordinates.lat, props.coordinates.long, props.title] /* Only re-run the effect if these values change (Important when using useEffect) */);

    return (
        <div id='map' className={`map ${props.className} bg-black`} />
    )
}
