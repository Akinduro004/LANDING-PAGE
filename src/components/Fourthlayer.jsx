import React from 'react'
import cards from '../assets/images/cards.png'
import dollarsign from '../assets/images/dollarsign.png'
import wallet from '../assets/images/wallet.png'
const Fourthlayer = () => {
  return (
    <div className='container mb-5' >
        <div className='row mt-5 justify-content-evenly'>
            <div className='col-md-3 text-center '>
                <div>
                <img style={{width:'20%'}} src={cards} alt="" />
                </div>
                <div>
                    <h4>Customizable Card</h4>
                </div>
                <div>
                    <h6 style={{color:'gray'}}>Custom your own card for your exact incomes and expenses needs.</h6>
                </div>

            </div>
            <div className=' col-md-3 text-center'>
                <div>
                <img style={{width:'20%'}} src={dollarsign} alt="" />
                </div>
                <div>
                    <h4>No payment fee</h4>
                </div>
                <div>
                    <h6 style={{color:'gray'}}>Transfer your payment all over the world with no payment fee.</h6>
                </div>

            </div>
            <div className=' col-md-3 text-center'>
                <div>
                <img style={{width:'20%'}} src={wallet} alt="" />
                </div>
                <div>
                    <h4>All in one place</h4>
                </div>
                <div>
                    <h6 style={{color:'gray'}}>The right place to keep your credit and debit cards, boarding passes & more. </h6>
                </div>

            </div>
        
        </div>
      
    </div>
  )
}

export default Fourthlayer
