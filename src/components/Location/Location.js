import React, { useContext, useEffect } from 'react';
import LocationContext from '../../context/LocationContext';
import Datablock from './Datablock';
import './location.css'


const Location = () => { 

  let {locationData} = useContext(LocationContext)
  const {ip,isp,location:{timezone,region,country,postalCode}} = locationData;

    useEffect(() => {

  },[locationData])

return(

<div className='Location'>
<Datablock title={'IP ADDRESS'} data={ip}/>
<hr />
<Datablock title={'LOCATION'} 
data={`${region} ,${country} ${postalCode}`}/>
<hr />
<Datablock title={'TIMEZONE'} data={timezone}/>
<hr />
<Datablock title={'ISP'} data={isp}/>
</div>

)
}

export default Location