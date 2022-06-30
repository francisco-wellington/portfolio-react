import React from 'react'
import './styleHero.css'

import IntoVid from '../../assets/video-home.mp4'


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video className="into-img" autoPlay muted loop>
          <source src={IntoVid} type="video/mp4" />
        </video>

      </div>
      <div className="content">
        <p>Hi, I'm Wellington</p>
        <h2>Web Developer<span>|</span> </h2>
        <div className="btn-home">
          <a href='#'>Download CV</a>
          <a href='#' className='btn-outline'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
