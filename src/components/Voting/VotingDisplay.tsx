import React, { useEffect, useState } from 'react'
import ActionHeader from '../ActionHeader'
import LogElement from './LogElement'

const VotingDisplay = () => {

  const [breeds, setBreeds] = useState<any>([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds?limit=25', {
          headers: {
            'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE'
          }
        }).then(response => response.json().then(data =>({
                data: setBreeds(data),
                status: response.status
              })))
    }, [])
    //im sorry that this is in every component i have error when i try to make it reusable, working on that
   
    const imgs = breeds.map((item) => (item.image.url))
    const [activeIndex, setActiveIndex] = useState(0);
    const nextImgIndex = activeIndex === breeds.length - 1 ? 0 : activeIndex + 1
    const likedArray:Array<any> = []
    const likeButton = () => {

      setActiveIndex(nextImgIndex)
      likedArray.push(imgs[activeIndex])
      console.log(likedArray)
    }
  return (
    <div className='action__display-wrapper'>
      <ActionHeader title='voting' />
      <div className="img__container">
        <img key={activeIndex} className='voting__img' src={imgs[activeIndex]} alt="" />
        <img key={nextImgIndex} className='voting__img-next' src={imgs[nextImgIndex]} alt="" />
        <div className="votes__container">
          <button className='votes__btn-like'
          onClick={likeButton}> 
          </button>
          <button className='votes__btn-fav'>
          </button>
          <button className='votes__btn-dislike'
          onClick={likeButton}>
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