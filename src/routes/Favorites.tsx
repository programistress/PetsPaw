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
        {favoritedArray.length > 0 ? (
               <CustomGrid images={favoritedArray}/>
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

export default Favorites