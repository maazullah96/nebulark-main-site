import './App.css'
import store from './app/store'

import { useState, useEffect } from 'react'

import { Navigation } from './components/navigation'
import SmoothScroll from 'smooth-scroll'

import { fetchAboutUs } from './features/aboutUs/aboutUsSlice'
import Header from './features/aboutUs/Header'
import Contact from './features/aboutUs/Contact'
import AboutUs from './features/aboutUs/AboutUs'
import ServiceList from './features/services/ServiceList'
import ProductsList from './features/products/ProductsList'
import Values from './features/aboutUs/Values'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({})
  // useEffect(() => {
  //   setLandingPageData(JsonData)
  // }, [])

  store.dispatch(fetchAboutUs())

  return (
    <div>
      <Navigation />
      <Header />
      <Values />
      <AboutUs />
      <ServiceList />
      <ProductsList />
      <Contact />
    </div>
  )
}

export default App
