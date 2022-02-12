import React, { useContext, useState } from 'react';
import {isIPv4} from 'is-ip';
import arrow from '../../assets/images/icon-arrow.svg'
import './header.css'
import axios from 'axios';
import LocationContext from '../../context/LocationContext';


const Header = () => { 
  let {addLocationData} = useContext(LocationContext)
  let [searchedIP,setSearchedIP] = useState('');

const handleOnClick = () => {
  if(isIPv4(searchedIP)){
      axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9tWzy2ELaQmMOLmipaoGZyRjoTIXB&ipAddress=${searchedIP}`)
     .then(res => addLocationData(res.data))
    .catch(err => console.log(err))
  }else{
    alert('WRONG IP !');
    
  }
}

return(

<div className='Header'>
<h1>IP Address Tracker</h1>
<div className="search-bar">
<input type="text" placeholder='Search for any IP address or domain'
 onChange={e => setSearchedIP(e.target.value)} />
<button onClick={() => handleOnClick()}><img src={arrow} alt="arrow" /></button>
</div>
</div>

)
}

export default Header