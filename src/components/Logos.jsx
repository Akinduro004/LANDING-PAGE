import React from 'react'
import logos from '../assets/images/logos.png'
const Logos = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='offset-1 col-8 mt-5'>
                <hr style={{border:'1.5px solid gray', width:'120%'}} className='mb-5'></hr>
                 <img style={{width:'120%'}} src={logos} alt="" />
                 <hr style={{border:'1.5px solid gray',width:'120%'}} className='mt-5'></hr>
            </div>
        </div>
      
    </div>
  )
}

export default Logos
