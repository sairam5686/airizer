import React from 'react'
import image from '../assets/image.png'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='nav'>
        <img className='nav_logo' src={image} width="150px"  alt="Application logo" />
        <Button />
    </div>
  )
}

export default Navbar