import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import '../components/Voting.css'
import VotingDisplay from '../components/VotingDisplay'

const VotingElement = () => {
  return (
    <div className='wrapper'>
     <StickyHeader />
     <div className='flexcolumn'>
     <TopMenu />
     <VotingDisplay />
     </div>
    </div>
  )
}

export default VotingElement