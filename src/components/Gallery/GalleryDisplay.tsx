import React, { useEffect, useState } from 'react'
import ActionHeader from '../ActionHeader'
import CustomGrid from '../CustomGrid'
import './GalleryDisplay.css'
import SortingComponent from './SortingComponent'
import { useSelector } from 'react-redux'
import { getAllCats } from '../../features/cats/catSlice'


const GalleryDisplay = () => {

  const cats = useSelector(getAllCats)

  const imgs = cats.map((item) => (item.image.url))
  const breednames = cats.map((item) => (item.breed))


  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='gallery' />
        <button className='upload__btn'>
          <img src="/upload-16.svg" alt="" />
          upload
        </button>
      </div>
      <SortingComponent />
      <CustomGrid images={imgs} breeds={breednames} />
    </div>
  )
}

export default GalleryDisplay