import React from 'react'
import mainlogo from '../assets/images/mainlogo.png'
const Seventhlayer = () => {
  return (
    <div className='container'>
        <div className='row '>
       <div className='col-10'>
       <hr style={{border:'1.5px solid gray',width:'120%'}} className='mt-5'></hr>   
       </div>
        </div>
        <div className='row'>
            <div className='col-lg-5'>
<div className='row'>
<div className='col-12'>
<img style={{width:'20%'}} src={mainlogo} alt="" />
</div>
</div>
<div className='row' style={{fontSize:'12px', marginTop:'30px'}}>
    <div className='col-lg-3'><p>@ Wallet 2022</p></div>
    <div className='col-lg-3'><p>Privacy Policy</p></div>
    <div className='col-lg-3'><p>Cookies Policy</p></div>
    <div className='col-lg-3'><p>Terms of Use</p></div>

</div>

 </div>
            <div className=' col-lg-5'>
                <div className='row '>
                    <div className='col-12'
>
                        <p>Updates right to your Inbox</p>
                    </div>
                   <div className='row mt-3 justify-content-between'>
                   <div className='col-lg-5 '>
                        <input placeholder='Email Address' type='email' 
                        style={{borderRadius:'5px', border:'3px solid #BFAFF2', backgroundColor:'#2B2B2B'}}></input>

                    </div>
                    <div className='col-lg-5 ' >
                    <button className='sendbutton' style={{backgroundColor:' #BFAFF2',borderRadius: '15px',height: '35px',width: '180px' }}>Send</button>
                    </div>

                   </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Seventhlayer
