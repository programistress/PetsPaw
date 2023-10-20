import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import { favoritedArray } from '../components/Voting/VotingDisplay'
import ActionHeader from '../components/Actions/ActionHeader'
import CustomGrid from '../components/CustomGrid/CustomGrid'

const Favorites = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='favorites' />
        <CustomGrid images={favoritedArray} voting={true} />
    </div>
      </div>
    </div>
  )
}

export default Favorites