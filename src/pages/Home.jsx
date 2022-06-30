import React from 'react'
import AboutHome from '../components/about/AboutHome'
import FormContact from '../components/contact/FormContact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import HeroImg from '../components/heroImg/HeroImg'
import Work from '../components/projects/Work'
import Skills from '../components/skills/Skills'
import './style.css'

const Home = () => {
  return (
    <>
      <span id="home"></span>
      <Navbar />
      <HeroImg />
      <AboutHome />
      <Skills />
      <Work />
      <FormContact />
      <Footer />
    </>
  )
}

export default Home
