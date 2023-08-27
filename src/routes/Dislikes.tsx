import React from 'react'
import TopMenu from '../components/TopMenu'
import StickyHeader from '../components/StickyHeader'
import ActionHeader from '../components/ActionHeader'
import CustomGrid from '../components/CustomGrid'
import { dislikedArray } from '../components/Voting/VotingDisplay'

const Dislikes = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='dislikes' />
        <CustomGrid images={dislikedArray} />
      </div>
      </div>
    </div>
  )
}

export default Dislikes