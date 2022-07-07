import React from 'react'
import './styleHero.css'

import IntoVid from '../../assets/video-home.mp4'
import Resume from '../../assets/resume-cv.pdf'

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
        <h2>
          Web Developer<span>|</span>{' '}
        </h2>
        <div className="btn-home">
          <a href={Resume}>Download CV</a>
          <a href="#contact" className="btn-outline">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
