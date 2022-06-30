import React from 'react'
import './styleAbout.css'
import FotoPerfil from '../../assets/foto-perfil.png'

const AboutHome = () => {
  return (
    <div id='about' className='about-container'>
      <h2>About</h2>
      <div className="about">
        <div className="left">
          <img src={FotoPerfil} alt="foto de perfil" />
        </div>
        <div className="right">
          <h3>Wellington Silva</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut exercitationem deleniti est necessitatibus odit at pariatur deserunt praesentium aspernatur culpa! Vero, molestiae deserunt! Nam amet quo iusto distinctio, quaerat cumque?</p>
          <div className="redes-sociais">
            <a href="#"><i class="bx bxl-linkedin-square"></i></a>
            <a href="https://github.com/WellingtonSilva12"
            ><i className="bx bxl-github"></i
            ></a>
            <a href="https://www.behance.net/wellingtonsilvaa"
            ><i className="bx bxl-behance"></i
            ></a>
            <a href="https://www.instagram.com/wellington.costaa_/"
            ><i className="bx bxl-instagram-alt"></i
            ></a>
            <a href="mailto:wellingtonsilva180g@gmail.com"
            ><i className="bx bxl-google-plus-circle"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome