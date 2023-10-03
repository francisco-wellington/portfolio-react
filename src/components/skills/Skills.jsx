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
        <h2> Habilidades Técnicas </h2>
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
            Estrutura da linguagem, Formulários, Listas, Eventos, Tags
            Semânticas.
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
            Seletores, Estilização, Layout e Animação, FlexBox, Responsividade,
            Grid.
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
            Condicionais e Loops, Funções, Arrys, Objetos, Eventos, Modulos,
            Async e Await.
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
            JSX, Template expressions, React Router, Props e States, Hooks do
            React, Context API,
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
            Uso de Variáveis, Nested Selectors, Modules, Mixins (funções),
            Extend, Partials.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
