import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import SearchDisplay from '../components/Search/SearchDisplay'

const SearchElement = () => {
  return (
    <div className='wrapper'>
     <StickyHeader />
     <div className='flexcolumn'>
     <TopMenu />
     <SearchDisplay />
     </div>
    </div>
  )
}

export default SearchElement

