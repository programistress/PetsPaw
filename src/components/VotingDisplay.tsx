import React from 'react'
import ActionHeader from './ActionHeader'
import LogElement from './LogElement'

const VotingDisplay = () => {
  return (
    <div className='action__display-wrapper'>
      <ActionHeader title='voting' />
      <div className="img__container">
        <img className='voting__img' src="/exampleimg.png" alt="" />
        <div className="votes__container">
          <button className='votes__btn-like'> 
          </button>
          <button className='votes__btn-fav'>
          </button>
          <button className='votes__btn-dislike'>
          </button>
        </div>
      </div>
      <div className='logs'>
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      </div>
    </div>
  )
}

export default VotingDisplay