import React from 'react'
import './MyMessage.css'


const MyMessage = () => {
  return (
    <div className='message__wrapper'>
      <h3 className='message__title'>Hi Rectuiter!</h3>
      <p className='message_desc'>
        I'm sorry that this project is'nt fully finished <span>YET.</span> I am and will be working on improving it, just didn't have enought time. <span>I am ready and motivated to work hard.</span>
      </p>
      <p className='message_desc'>
       The voting page works and you can see your like/dislike votes and favorites on separate pages.
      </p>
      <p className='message_desc'>
       I will implement the following missing functions of this project:
       <br />
       - better project architecture
       <br />
       - uploading a photo logic
       <br />
       - search request 
       <br />
       - sorting element's dropdown logics 
       <br />
       - local storage for keeping button active state  ...and more
      </p>
      {/* <img className='message__img' src="/catmeme.png" alt="" /> */}
    </div>
  )
}

export default MyMessage