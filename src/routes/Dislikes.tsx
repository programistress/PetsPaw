import React from 'react'
import TopMenu from '../components/TopMenu'
import StickyHeader from '../components/StickyHeader'
import ActionHeader from '../components/Actions/ActionHeader'
import { dislikedArray } from '../components/Voting/VotingDisplay'
import CustomGridVoting from '../components/CustomGrid/CustomGridVoting'

const Dislikes = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='dislikes' />
        <CustomGridVoting images={dislikedArray} />
      </div>
      </div>
    </div>
  )
}

export default Dislikes