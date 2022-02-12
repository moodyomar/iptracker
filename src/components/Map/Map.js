import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import iconLocation from '../../assets/images/icon-location.svg'
import './map.css'
import LocationContext from '../../context/LocationContext';

const Map = () => {

  let { locationData } = useContext(LocationContext)
  const { location:{lat, lng} } = locationData;
  let [position,setPosition] = useState([lat,lng])
  const iconMarkup = renderToStaticMarkup(<img alt="map marker" src={iconLocation} />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

    useEffect(() => {
      setPosition([lat,lng])
  },[locationData,position,lat,lng])
  
  const popUp = 'You are here';

  return (
    <div className='MapContainer'>
      <MapContainer className='map' center={position} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>
            {popUp}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map