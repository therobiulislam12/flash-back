import React from 'react'
import AboutUs from '../components/AboutUs'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Categories/>
      <AboutUs/>
      <Advertisement/>
    </>
  )
}

export default Home