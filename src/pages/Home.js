import React from 'react'
import AboutUs from '../components/AboutUs'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import HeroSection from '../components/HeroSection'
import useTitles from '../hooks/useTitles'

const Home = () => {

  // set page title
  useTitles('Home')

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