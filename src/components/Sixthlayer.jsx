import React from 'react'
import primarycard from '../assets/images/primarycard.png'
const Sixthlayer = () => {
  return (
    <div className='container mt-5'>
    <div style={{marginTop:'130px'}} className='row '>
        <div className='offset-1 col-lg-5'>
       <div>
        <h1 style={{width:'60%',}} className='mb-4'>Questions? Let's talk</h1>
        </div>
       <div>
        <h6 style={{width:'70%', color:'grey'}} className='mb-4'>
        Contact us through our 24/7 live chat. We’re always happy to help!</h6>
            </div>
       <div>
        <button style={{backgroundColor:'yellow', borderRadius:'10px', height:'40px', width:'120px',marginTop:'100px', marginBottom:'15px'}}>
        Get Started</button>
        </div>
        </div>
        <div className='col-lg-5 image'>
        <div style={{backgroundColor:'grey', borderRadius:'5px'}}>
            <img src={primarycard} alt="" /></div>
        </div>

    </div>
  
</div>
  )
}

export default Sixthlayer
