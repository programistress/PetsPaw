import React, { useEffect, useState } from 'react'
import ActionHeader from '../ActionHeader'
import CustomGrid from '../CustomGrid'
import './GalleryDisplay.css'
import SortingComponent from './SortingComponent'




const GalleryDisplay = () => {

    const [breeds, setBreeds] = useState<any>([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds?limit=15', {
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
  const breednames = breeds.map((item) => (item.breed))


  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='gallery' />
        <button className='upload__btn'>
          <img src="/upload.svg" alt="" />
          upload
        </button>
      </div>
      <SortingComponent />
      <CustomGrid images={imgs} breeds={breednames} />
    </div>
  )
}

export default GalleryDisplay