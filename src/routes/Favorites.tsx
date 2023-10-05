import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import { favoritedArray } from '../components/Voting/VotingDisplay'
import ActionHeader from '../components/Actions/ActionHeader'
import CustomGridVoting from '../components/CustomGrid/CustomGridVoting'

const Favorites = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='favorites' />
        <CustomGridVoting images={favoritedArray} />
    </div>
      </div>
    </div>
  )
}

export default Favorites