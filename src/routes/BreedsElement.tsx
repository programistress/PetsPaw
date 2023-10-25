import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import BreedsDisplay from '../components/Breeds/BreedsDisplay'
import { useMediaQuery } from 'react-responsive'

const BreedsElement = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
  return (
    <div className='wrapper'>
      {isBigScreen && <StickyHeader />}
      <div className='flexcolumn'>
       <TopMenu />
       <BreedsDisplay /> 
      </div>
    </div>
  )
}

export default BreedsElement
