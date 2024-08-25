import React from 'react'
import mainlogo from '../assets/images/mainlogo.png'

const Nav = () => {
  return (
    <div className='container'>
       <div className='row pt-md-4 '>
        <div className='col-3 logo'>
            <img src={mainlogo} alt="" />
        </div>
        <div className='offset-3 col-6 buttons '>
           <button className='signup '>Sign up</button>
           <button className='login'>Login</button>
        </div>
       </div>
    </div>
  )
}

export default Nav
