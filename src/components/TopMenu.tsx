import React from 'react'
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className='topmenu'>
      <div className='searchbar'>
      <input className='search__input' placeholder='Search for breeds by name' type="text" />
      <button className='search__btn'>
      </button>
      </div>
      <Link to={`/`}>
        <button className='topmenu_btn'>
          <img src="/like.svg" alt="" />
        </button>
      </Link>
      <Link to={`/`}>
        <button className='topmenu_btn'>
          <img src="/heart.svg" alt="" />
        </button>
      </Link>
      <Link to={`/`}>
        <button className='topmenu_btn'>
          <img src="/dislike.svg" alt="" />
        </button>
      </Link>
    </div>
  )
}

export default TopMenu