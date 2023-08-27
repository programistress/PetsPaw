import React, { useEffect, useState } from 'react'
import ActionHeader from '../ActionHeader'
import LogElement from './LogElement'
import LogComponent from './LogComponent'

export const likedArray:Array<any> = []
export const dislikedArray:Array<any> = []
export const favoritedArray:Array<any> = []

const VotingDisplay = () => {
  const [breeds, setBreeds] = useState<any>([])
  const [favorite, setFavorite] = useState(false)
  const [logs, setLogs] = useState<any>([])

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
    const ids = breeds.map((item) => (item.id))
    const [activeIndex, setActiveIndex] = useState(0);
    const nextImgIndex = activeIndex === breeds.length - 1 ? 0 : activeIndex + 1

    let date = new Date(); 
    const hh = date.getHours();
    const mm = date.getMinutes();


    const newLogLike = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Likes',
      iconSrc: '/like-color-30.svg'
    }

    const newLogDislike = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Disikes',
      iconSrc: '/dislike-color-30.svg'
    }

    const newLogFavorite = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Favorites',
      iconSrc: '/heart.svg'
    }
  

    const likeButton = () => {
      setActiveIndex(nextImgIndex)
      likedArray.push(imgs[activeIndex])
      setFavorite(false)
      setLogs([...logs, newLogLike])
    }

    const dislikeButton = () => {
      setActiveIndex(nextImgIndex)
      dislikedArray.push(imgs[activeIndex])
      setFavorite(false)
      setLogs([...logs, newLogDislike])
    }
    
    const favoriteButton = () => {
      favoritedArray.push(imgs[activeIndex])
      setFavorite(true)
      setLogs([...logs, newLogFavorite])
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
          <button className={favorite ? 'votes__btn-fav-active'  : 'votes__btn-fav'}
          onClick={favoriteButton}>
          </button>
          <button className='votes__btn-dislike'
          onClick={dislikeButton}>
          </button>
        </div>
      </div>
      <LogComponent logs={logs}/>
    </div>
  )
}

export default VotingDisplay