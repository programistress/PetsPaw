import React from 'react'
import ActionHeader from '../Actions/ActionHeader'
import './SearchDisplay.css'
import { useSelector } from 'react-redux'
import CustomGrid from '../CustomGrid/CustomGrid'
import {  getSearchArray } from '../../features/cats/catSlice'
import { useMediaQuery } from 'react-responsive'
import CustomGridMobile from '../CustomGrid/CustomGridMobile'

const GalleryDisplay = () => {
  const searchArray = useSelector(getSearchArray)
 
  const isMobile = useMediaQuery({ query: '(max-width: 725px)' })

  if (searchArray.length > 0) {
  const imgs = searchArray.map((item) => (item.url)) 
  console.log(imgs)
  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='search' />
      </div> 
      {isMobile ? <CustomGridMobile images={imgs}/> :  <CustomGrid images={imgs}/>  }
     
    </div>
  )
  } else {
    return (
      <div className='action__display-wrapper'>
        <div className='top__section_gallery'>
          <ActionHeader title='search' />
        </div> 
          
      </div>
    )
  }
}

export default GalleryDisplay