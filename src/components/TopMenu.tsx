import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SearchElement from './Search/SearchElement';

const TopMenu = () => {
  
  return (
    <div className='topmenu'>
      <SearchElement />
      <div className='topmenu__emojis'>
      <Link to={`/likes`}>
        <button className='topmenu_btn'>
          <img src="/like.svg" alt="" />
        </button>
      </Link>
      <Link to={`/favorites`}>
        <button className='topmenu_btn'>
          <img src="/heart.svg" alt="" />
        </button>
      </Link>
      <Link to={`/dislikes`}>
        <button className='topmenu_btn'>
          <img src="/dislike.svg" alt="" />
        </button>
      </Link>
      </div>
    </div>
  )
}

export default TopMenu