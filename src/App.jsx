import React from 'react'
import Nav from './components/Nav'
import Secondlayer from './components/Secondlayer'
import Logos from './components/Logos'
import Fourthlayer from './components/Fourthlayer'
import FIfthlayer from './components/FIfthlayer'
import Sixthlayer from './components/Sixthlayer'
import Seventhlayer from './components/Seventhlayer'
const App = () => {
  return (
    <div className='body'>
      <Nav/>
      <Secondlayer />
      <Logos />
      <Fourthlayer />
      <FIfthlayer /> 
      <Sixthlayer />
      <Seventhlayer/>
    </div>
  )
}

export default App
