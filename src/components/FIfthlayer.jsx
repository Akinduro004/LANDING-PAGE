import React from 'react'
import dashboard2 from '../assets/images/dashboard2.png'
import testimony from '../assets/images/testimony.png'

const FIfthlayer = () => {
  return (
    <div className='container '>
        <div className='row justify-content-around mb-5' >
            <div className='col-9' style={{backgroundColor:'beige', borderRadius:'10px', marginTop:'40px'}}>
            <img style={{width:'100%', }} src={dashboard2} alt="" />

            </div>

        </div>

        <div className='row justify-content-around mt-5' >
            <div className='col-9' style={{}}>
            <img style={{width:'100%', }} src={testimony} alt="" />

            </div>

        </div>
      
    </div>
  )
}

export default FIfthlayer
