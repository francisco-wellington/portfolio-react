import './style.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navActive, setNavActive] = useState('menu-nav')
  const [iconToggle, setIconToggle] = useState('nav-toggle')

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

  return (
    <nav className="header">
      <Link to="/">
        <h1>
          <span>in</span>Well
        </h1>
      </Link>

      <ul className={navActive}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Skills</Link>
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
