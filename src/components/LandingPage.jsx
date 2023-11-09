
import React from 'react'
import Header from './Header'
import Hero from './LandingPage/Hero'

const LandingPage = () => {
  return (
    <div>
      <div className='fixed top-0 w-full'>
        <Header/>
      </div>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
    </div>
  )
}

export default LandingPage