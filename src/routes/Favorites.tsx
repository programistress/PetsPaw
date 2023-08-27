import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import ActionHeader from '../components/ActionHeader'
import CustomGrid from '../components/CustomGrid'
import { favoritedArray } from '../components/Voting/VotingDisplay'

const Favorites = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='favorites' />
        <CustomGrid images={favoritedArray} />
    </div>
      </div>
    </div>
  )
}

export default Favorites