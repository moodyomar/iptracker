import React from 'react';


const Datablock = ({title,data}) => { 

return(

<div className='Datablock'>
<h4>{title}</h4>
<p>{data}</p>
</div>

)
}

export default Datablock