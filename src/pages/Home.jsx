import React from 'react'
import Navbar from '../components/Navbar'
import './style.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          aliquam quidem at maxime sunt omnis atque, iusto soluta quod,
          dignissimos voluptatum perferendis dolorem nemo iste itaque laborum
          mollitia excepturi voluptate.
        </p>
      </div>
    </>
  )
}

export default Home
