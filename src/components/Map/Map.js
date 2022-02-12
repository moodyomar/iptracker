import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {divIcon} from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import iconLocation from '../../assets/images/icon-location.svg'
import './map.css'

const Map = () => {

const iconMarkup = renderToStaticMarkup(<img alt="map marker" src={iconLocation} />);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });


  const position = [32.0995328, 34.7799552]
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