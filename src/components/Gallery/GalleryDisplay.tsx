import React, { useEffect, useState } from 'react'
import ActionHeader from '../Actions/ActionHeader'
import CustomGrid from '../CustomGrid/CustomGrid'
import './GalleryDisplay.css'
import SortingComponent from './SortingComponent'
import { useSelector } from 'react-redux'
import { getGalleryCats } from '../../features/cats/catSlice'


const GalleryDisplay = () => {
  const catsprev = useSelector(getGalleryCats)
  //because the api is broken and some element dont have an image
  const catsGallery:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      catsGallery.push(element)
    }
  })

  const imgs = catsGallery.map((item) => (item.image.url))

  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='gallery' />
        <button className='upload__btn'>
          upload
        </button>
      </div>
      <SortingComponent />
      <CustomGrid images={imgs}/>
    </div>
  )
}

export default GalleryDisplay