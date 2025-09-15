import React from 'react'
import Hero from './Hero'
import Pets from './Pets'
import Banner1 from '../Banners/Banner1'
import Products from './Products'
import PSellers from './PSellers'
import Banners2 from '../Banners/Banners2'
import Knowledge from './Knowledge'

const Homepage = () => {
  return (
    <div className='z-0'>
      <h1>Welcome to Monito Pet</h1>
        <Hero/>
        <Pets/>
        <Banner1/>
        <Products/>
        <PSellers/>
        <Banners2/>
        <Knowledge/>
    </div>
  )
}

export default Homepage