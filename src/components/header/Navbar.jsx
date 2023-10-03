import './styleHeader.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navActive, setNavActive] = useState('menu-nav')
  const [iconToggle, setIconToggle] = useState('nav-toggle')

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const navToggle = function () {
    if (navActive === 'menu-nav') {
      setNavActive('menu-nav nav-active')
    } else {
      setNavActive('menu-nav')
    }

    if (iconToggle === 'nav-toggle') {
      setIconToggle('nav-toggle toggle')
    } else {
      setIconToggle('nav-toggle')
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <nav className={color ? 'header header-bg' : 'header'}>
      <a href="#home">
        <h1>
          <span></</span>Well
        </h1>
      </a>

      <ul className={navActive}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={navToggle} className={iconToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar
