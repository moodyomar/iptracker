import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {divIcon} from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

import iconLocation from '../../assets/images/icon-location.svg'
import './map.css'

const Map = () => {

  // at_9tWzy2ELaQmMOLmipaoGZyRjoTIXB
  // https://geo.ipify.org/api/v2/country?apiKey=at_9tWzy2ELaQmMOLmipaoGZyRjoTIXB&ipAddress=8.8.8.8

  //   let mapToken = 'sk.eyJ1IjoibW9vZHlvbWFyIiwiYSI6ImNreml6MWZraDAxa2oydW56NHg1eGJkam4ifQ.G8ADrcMDKcAzudPxDel9vA';

const iconMarkup = renderToStaticMarkup(<img src={iconLocation} />);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });


  const position = [51.505, -0.09]
  const popUp = 'You are here';

  return (
    <div className='MapContainer'>
      <MapContainer className='map' center={[51.505, -0.09]} zoom={13}>
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