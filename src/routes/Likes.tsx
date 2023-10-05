import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import ActionHeader from '../components/Actions/ActionHeader'
import { likedArray } from '../components/Voting/VotingDisplay'
import CustomGridVoting from '../components/CustomGrid/CustomGridVoting'

const Likes = () => {
  return (
    <div className='wrapper'>
    <StickyHeader />
    <div className='flexcolumn'>
    <TopMenu />
    <div className='action__display-wrapper'>
    <ActionHeader title='likes' />
    <CustomGridVoting images={likedArray} />
    </div>
    </div>
    </div>
  )
}

export default Likes