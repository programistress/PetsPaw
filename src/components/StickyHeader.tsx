import React from 'react'
import Actions from './Actions'
import logo from '../assets/header-assets/Logo.svg'
import hi from '../assets/header-assets/Hi.svg'
import { Link } from 'react-router-dom'
import MyMessage from './MyMessage'

const StickyHeader = () => {
  return (
    <div className="header__wrapper">
      <Link to='/'>
    <img className='logo__img' src={logo} alt="" />
      </Link>
    <img className='hi__img' src={hi} alt="" />
      {/* sorry i used an img because i didnt have time to figure out how to make the ios emoji look like that on all devices */}
    <p className='header__desc'>Welcome to MacPaw Bootcamp 2023</p> 
    <h2 className='header__title'>Lets start using The Cat API</h2>
    <Actions />
    <MyMessage />
    </div>
  )
}

export default StickyHeader