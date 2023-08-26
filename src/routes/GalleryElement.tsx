import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import GalleryDisplay from '../components/Gallery/GalleryDisplay'

const GalleryElement = () => {
  return (
    <div className='wrapper'>
     <StickyHeader />
     <div className='flexcolumn'>
     <TopMenu />
     <GalleryDisplay />
     </div>
    </div>
  )
}

export default GalleryElement

