import React from 'react';
import arrow from '../../assets/images/icon-arrow.svg'
import './header.css'


const Header = () => { 

return(

<div className='Header'>
<h1>IP Address Tracker</h1>
<div className="search-bar">
<input type="text" placeholder='Search for any IP address or domain' />
<button><img src={arrow} alt="arrow" /></button>
</div>
</div>

)
}

export default Header