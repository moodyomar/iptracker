import {createContext,useState} from 'react';

const LocationContext = createContext();

export const LocationProvider = ({children}) => {
  let [locationData,setLocationData] = useState({
    ip:'192.212.174.101',
    location:{
      region:'Brooklyn',
      country:'NY',
      postalCode:'10001',
      timezone:'UTC -05:00',
      lat: 37.40599,
      lng: -122.078514,
    },
    isp:'SpaceX Starlink'
  });

  const addLocationData = (data) => {
    setLocationData(data);
  }

  return <LocationContext.Provider value={{
    locationData,
    addLocationData
  }}>
    {children}
  </LocationContext.Provider>
}

export default LocationContext