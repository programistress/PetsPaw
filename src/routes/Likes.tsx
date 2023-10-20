import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import ActionHeader from '../components/Actions/ActionHeader'
import { likedArray } from '../components/Voting/VotingDisplay'
import CustomGrid from '../components/CustomGrid/CustomGrid'

const Likes = () => {
  return (
    <div className='wrapper'>
    <StickyHeader />
    <div className='flexcolumn'>
    <TopMenu />
    <div className='action__display-wrapper'>
    <ActionHeader title='likes' />
    <CustomGrid images={likedArray} voting={true} />
    </div>
    </div>
    </div>
  )
}

export default Likes