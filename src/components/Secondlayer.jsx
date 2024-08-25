import React from 'react'
import dashboard from '../assets/images/dashboard.png'

const Secondlayer = () => {
  return (
    <div className='container mt-5'>
        <div style={{marginTop:'130px'}} className='row '>
            <div className='offset-1 col-lg-5'>
           <div>
            <h1 style={{width:'60%', fontWeight:'bolder'}} className='mb-4'>SaaS Landing Page Template</h1>
            </div>
           <div>
            <h6 style={{width:'70%', color:'grey'}} className='mb-4'>
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</h6>
                </div>
           <div>
            <button 
            style={{backgroundColor:'yellow', borderRadius:'10px', height:'40px', width:'120px',marginTop:'100px',
             marginBottom:'15px', }}>
            Get Started</button>
            </div>
            </div>
            <div className='col-lg-5 image'>
            <div style={{backgroundColor:'grey', borderRadius:'5px'}}>
                <img src={dashboard} alt="" /></div>
            </div>

        </div>
      
    </div>
  )
}

export default Secondlayer
