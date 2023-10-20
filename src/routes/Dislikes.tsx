import React from 'react'
import TopMenu from '../components/TopMenu'
import StickyHeader from '../components/StickyHeader'
import ActionHeader from '../components/Actions/ActionHeader'
import { dislikedArray } from '../components/Voting/VotingDisplay'
import CustomGrid from '../components/CustomGrid/CustomGrid'

const Dislikes = () => {
  return (
    <div className='wrapper'>
      <StickyHeader />
      <div className='flexcolumn'>
      <TopMenu />
      <div className='action__display-wrapper'>
        <ActionHeader title='dislikes' />
        <CustomGrid images={dislikedArray} voting={true} />
      </div>
      </div>
    </div>
  )
}

export default Dislikes