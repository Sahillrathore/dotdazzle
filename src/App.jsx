import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Services from './components/Services'
import Section from './components/Section'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Services/>
      <Section/>
      <Portfolio/>
    </div>
  )
}

export default App