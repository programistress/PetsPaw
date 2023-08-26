import React from 'react'
import DropdownElement from './DropdownElement'

const SortingComponent = () => {
  return (
    <div className='sorting'>
      <div className='sorting__row'>
      <DropdownElement label='order' placeholder='Random' key={1} />
      <DropdownElement label='TYPE' placeholder='Static' key={2}/>
      </div>
      <div className='sorting__row'>
      <DropdownElement label='BREED' placeholder='None' key={3}/>
      <DropdownElement label='LIMIT' placeholder='5 items per page' key={4}/>
      <button className='update__btn'>
        <img src="/refresh.svg" alt="" />
      </button>
      </div>
    </div>
  )
}

export default SortingComponent