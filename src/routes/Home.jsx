import './Home.css'
import StickyHeader from '../components/StickyHeader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCats, addVotingCats, addGalleryCats, getAllCats, getVotingCats, getGalleryCats, setImgArray, setImgArrayGallery } from '../features/cats/catSlice'


const Header = () => {
  const dispatch = useDispatch()
  const cats = useSelector(getAllCats)
  const vcats = useSelector(getVotingCats)
  const gcats = useSelector(getGalleryCats)
  
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds/?limit=67', {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      }
    }).then(response => response.json().then(data =>({
            data: dispatch(addCats(data), addVotingCats(data), addGalleryCats(data)),
            status: response.status
          })))
}, [])

useEffect(() => {
  fetch('https://api.thecatapi.com/v1/breeds/?limit=67', {
    headers: {
      'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
    }
  }).then(response => response.json().then(data =>({
          data: dispatch( addVotingCats(data)),
          status: response.status
        })))
}, [])

useEffect(() => {
  fetch('https://api.thecatapi.com/v1/breeds/?limit=67', {
    headers: {
      'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
    }
  }).then(response => response.json().then(data =>({
          data: dispatch(addGalleryCats(data)),
          status: response.status
        })))
}, [])

useEffect(() => {
  fetch('https://api.thecatapi.com/v1/images/?brees_ids=abys', {
    headers: {
      'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
    }
  }).then(response => response.json().then(data =>({
          data: dispatch(setImgArray(data)),
          status: response.status
        })))
}, [])

useEffect(() => {
  fetch('https://api.thecatapi.com/v1/images/?brees_ids=abys', {
    headers: {
      'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
    }
  }).then(response => response.json().then(data =>({
          data: dispatch(setImgArrayGallery(data)),
          status: response.status
        })))
}, [])

console.log(cats)
console.log(vcats)
console.log(gcats)

  return (
    <header className='wrapper'>
      <StickyHeader />
      <div className='header__img-bg'>
      <img className='header__img' src='/girl-and-pet.svg' alt="home image" />
      </div>
    </header>
  )
}

export default Header