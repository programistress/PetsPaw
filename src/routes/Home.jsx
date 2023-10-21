import './Home.css'
import StickyHeader from '../components/StickyHeader'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCats, addVotingCats, addGalleryCats, setImgArray} from '../features/cats/catSlice'


const Header = () => {
  const dispatch = useDispatch()
  
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
          data: dispatch(addVotingCats(data)),
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