import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import ActionHeader from '../components/ActionHeader'
import CustomGrid from '../components/CustomGrid'
import { likedArray } from '../components/Voting/VotingDisplay'

const Likes = () => {
  return (
    <div className='wrapper'>
    <StickyHeader />
    <div className='flexcolumn'>
    <TopMenu />
    <div className='action__display-wrapper'>
    <ActionHeader title='likes' />
    <CustomGrid images={likedArray} />
    </div>
    </div>
    </div>
  )
}

export default Likes