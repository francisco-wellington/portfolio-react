import React from 'react'
import './styleSkill.css'

import ImgCSS from '../../assets/css.png'
import ImgHTML from '../../assets/html5.png'
import ImgJS from '../../assets/js.png'
import ImgReact from '../../assets/react.png'
import ImgSass from '../../assets/sass.png'
import ImgMongoDb from '../../assets/mongo.png'


const Skills = () => {
  return (
    <div className="skill" id="skill">
      <div className="header-skill">
        <h2>Skills</h2>
      </div>
      <div className="container-skill">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgHTML} className="skill-icon" />
            </div>
            <h3>HTML 5</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgCSS} className="skill-icon" />
            </div>
            <h3>CSS</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgJS} className="skill-icon" />
            </div>
            <h3>Javascript</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgReact} className="skill-icon" />
            </div>
            <h3>React JS</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgSass} className="skill-icon" />
            </div>
            <h3>Sass</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img src={ImgMongoDb} className="skill-icon" />
            </div>
            <h3>Mongo DB</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            explicabo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills