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
            {likedArray.length > 0 ? (
               <CustomGrid images={likedArray}/>
            ) : (
             <div className='noitem__message'>
              No item here yet.
             </div>
            )}
           
          </div>
        </div>
    </div>
  )
}

export default Likes