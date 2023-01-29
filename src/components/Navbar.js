import React from 'react'
import '../assets/css/style.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='nav'>
        <img src={logo} alt="" className='nav--logo'/>
    </nav>
  )
}

export default Navbar