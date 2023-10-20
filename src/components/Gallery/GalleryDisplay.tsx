import React, { useEffect, useState } from 'react'
import ActionHeader from '../Actions/ActionHeader'
import './GalleryDisplay.css'
import SortingComponent from './SortingComponent'
import { useSelector } from 'react-redux'
import { getArrayTypeGallery, getGalleryCats, getImgArrayGallery } from '../../features/cats/catSlice'
import CustomGrid from '../CustomGrid/CustomGrid'


const GalleryDisplay = () => {
  const catsprev = useSelector(getGalleryCats)
  const imgArray = useSelector(getImgArrayGallery)
  const arrayType = useSelector(getArrayTypeGallery)
  
  //because the api is broken and some element dont have an image
  const catsGallery:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      catsGallery.push(element)
    }
  })

  
  const imgsfull = catsGallery.map((item) => (item.image.url))
  const imgs = imgArray.map((item) => (item.url))


  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='gallery' />
        <button className='upload__btn'>
          upload
        </button>
      </div>
      <SortingComponent />
      <CustomGrid images={arrayType === 'full' ? imgsfull : imgs}/>
    </div>
  )
}

export default GalleryDisplay