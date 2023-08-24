import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import BreedsDisplay from '../components/BreedsDisplay'

const BreedsElement = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
       <TopMenu />
       <BreedsDisplay /> 
      </div>
    </div>
  )
}

export default BreedsElement
