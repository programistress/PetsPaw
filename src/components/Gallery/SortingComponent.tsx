import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCats, addGalleryCats, getAllCats, getBreedGallery, getLimitGallery, getOrderGallery, getTypeGallery } from '../../features/cats/catSlice'
import DropdownElementOrder from './DropdownElementOrder'
import DropdownElementType from './DropdownelementType'
import DropdownElementBreed from './DropdownElementBreed'
import DropdownElementLimit from './DropdownElementLimit'

const SortingComponent = () => {
  const dispatch = useDispatch()
  const catsprev = useSelector(getAllCats)
  const order = useSelector(getOrderGallery)
  const breed = useSelector(getBreedGallery)
  const type = useSelector(getTypeGallery)
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
  const typeOptions = ['All', 'Static', 'Animated']
  let breeds = cats.map((item) => (item.name))
  const limits = ['5', '10', '15', '20']

  const updateArray = async () => {
    fetch(`https://api.thecatapi.com/v1/breeds/?order=${order}&mime_types=${type}&breed_ids=${breed}&limit=${limit}`, {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(addGalleryCats(data)),
            status: response.status
          })))    
  }

  return (
    <div className='sorting'>
      <div className='sorting__row'>
    {/* can improve this by making it a reusable component but not sure how to make it return separate values */}
      <DropdownElementOrder label='ORDER' placeholder='Random' params={alphabetOptions} className='sorting__dropdown overflow order open' hidden='sorting__dropdown order hidden'/>
      <DropdownElementType label='TYPE' placeholder='Static' params={typeOptions} className='sorting__dropdown overflow type' hidden='sorting__dropdown type hidden'/>
      </div>
      <div className='sorting__row'>
      <DropdownElementBreed label='BREED' placeholder='All breeds' params={breeds} className='sorting__dropdown overflow breed' hidden='sorting__dropdown breed hidden'/>
      <DropdownElementLimit label='LIMIT' placeholder='5 items per page' params={limits} className='sorting__dropdown overflow limit_' hidden='sorting__dropdown limit_ hidden'/>
      <button className='update__btn' onClick={updateArray}>
      </button>
      </div>
    </div>
  )
}

export default SortingComponent