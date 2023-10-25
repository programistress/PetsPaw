import React from 'react'
import StickyHeader from '../components/StickyHeader'
import TopMenu from '../components/TopMenu'
import '../components/Voting/Voting.css'
import VotingDisplay from '../components/Voting/VotingDisplay'
import { useMediaQuery } from 'react-responsive'

const VotingElement = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
  return (
    <div className='wrapper'>
     {isBigScreen && <StickyHeader />}
     <div className='flexcolumn'>
      <TopMenu />
      <VotingDisplay />
     </div>
    </div>
  )
}

export default VotingElement