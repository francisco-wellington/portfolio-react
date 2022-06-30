import React from 'react'
import './styleFooter.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="navbar-footer">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="redes-sociais">
          <a href="#">
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
        <div className="contact-footer">
          <p>get in touch</p>
        </div>
        <div className='desc-footer'>
          <p>2022 &copy; All Rights Reserved • <a href="https://www.linkedin.com/in/nwellingtonsilva/">Wellington Silva</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
