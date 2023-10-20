import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGalleryCats, changeArrayTypeGallery, getAllCats, getBreedGallery, getLimitGallery, getOrderGallery, setImgArrayGallery, setSavedLimit} from '../../features/cats/catSlice'
import DropdownElementOrder from './DropdownElementOrder'
import DropdownElementType from './DropdownelementType'
import DropdownElementBreed from './DropdownElementBreed'
import DropdownElementLimit from './DropdownElementLimit'

const SortingComponent = () => {
  
  const dispatch = useDispatch()
  const catsprev = useSelector(getAllCats)
  const order = useSelector(getOrderGallery)
  const breed = useSelector(getBreedGallery)
  const limit = useSelector(getLimitGallery)
  //because the api is broken and some element dont have an image
  const cats:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      cats.push(element)
    }
  })
  console.log(cats)

  const alphabetOptions = ['Random', 'Asc', 'Desc']
  const typeOptions = ['All', 'Sorry', 'This', 'Doesn\'t', 'Work']
  let breeds = cats.map((item) => (item.name))
  const limits = ['10', '5', '15', '20']

  const startUrl = 'https://api.thecatapi.com/v1'

  

  const updateArray = async () => {
    dispatch(setSavedLimit(limit))
    if (breed !== 'all') {
      dispatch(changeArrayTypeGallery('img'))
      await fetch(`${startUrl}/images/search?limit=67&breed_ids=${breed}`, {
        headers: {
          'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
        },
      }).then(response => response.json().then(data =>({
              data: dispatch(setImgArrayGallery(data)),
              status: response.status
            })))    
    } else {
      dispatch(changeArrayTypeGallery('full'))
      await fetch(`${startUrl}/breeds/?limit=67&order=${order}`, {
        headers: {
          'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
        },
      }).then(response => response.json().then(data =>({
              data: dispatch(addGalleryCats(data)),
              status: response.status
            })))    
      }
  }

  return (
    <div className='sorting'>
      <div className='sorting__row'>
    {/* can improve this by making it a reusable component but not sure how to make it return separate values */}
      <DropdownElementOrder 
      label='ORDER'
      params={alphabetOptions} 
      className='sorting__dropdown overflow order open' 
      hidden='sorting__dropdown order hidden'/>
      <DropdownElementType 
      label='TYPE'  
      params={typeOptions} 
      className='sorting__dropdown overflow type' 
      hidden='sorting__dropdown type hidden'/>
      </div>
      <div className='sorting__row'>
      <DropdownElementBreed 
      label='BREED' 
      className='sorting__dropdown overflow breed' 
      hidden='sorting__dropdown breed hidden'/>
      <DropdownElementLimit 
      label='LIMIT' 
      params={limits} 
      className='sorting__dropdown overflow limit_' 
      hidden='sorting__dropdown limit_ hidden'/>
      <button 
      className='update__btn' 
      onClick={updateArray}/>
      </div>
    </div>
  )
}

export default SortingComponent