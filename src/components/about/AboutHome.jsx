import React from 'react'
import './styleAbout.css'
import FotoPerfil from '../../assets/foto-perfil.png'

const AboutHome = () => {
  return (
    <div id="about" className="about-container">
      <h2>About</h2>
      <div className="about">
        <div className="left">
          <img src={FotoPerfil} alt="foto de perfil" />
        </div>
        <div className="right">
          <h3>Wellington Silva</h3>
          <p>
            Frontend Developer, focado no desenvolvimento Web, mobile e desktop, com ampla experiencia em javascript e suas bibliotecas / framework, buscando sempre seguir os padrões de boas práticas de
            programação e código limpo.
          </p>
          <div className="redes-sociais">
            <a href="https://www.linkedin.com/in/nwellingtonsilva/">
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://github.com/WellingtonSilva12">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.behance.net/wellingtonsilvaa">
              <i className="bx bxl-behance"></i>
            </a>
            <a href="https://www.instagram.com/wellington.costaa_/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="mailto:wellingtonsilva180g@gmail.com">
              <i className="bx bxl-google-plus-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome
