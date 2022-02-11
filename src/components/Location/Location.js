import React from 'react';
import Datablock from './Datablock';
import './location.css'


const Location = () => { 

return(

<div className='Location'>
<Datablock title={'IP ADDRESS'} data={'192.212.174.101'}/>
<hr />
<Datablock title={'LOCATION'} data={'Brooklyn, NY 10001'}/>
<hr />
<Datablock title={'TIMEZONE'} data={'UTC -05:00'}/>
<hr />
<Datablock title={'ISP'} data={'SpaceX Starlink'}/>
</div>

)
}

export default Location