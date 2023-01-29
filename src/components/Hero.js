import React from 'react'
import grid from '../assets/img.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={grid} alt="" />
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero