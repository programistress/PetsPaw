import React, { useEffect, useState } from 'react'
import ActionHeader from '../ActionHeader'
import CustomGrid from '../CustomGrid'
import './Display.css'
import { useFetch } from '../../acync/api'

const BreedsDisplay = () => {

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
      <div className='top__section'>
      <ActionHeader title='breeds' />
      <button className='dropdown__btn breeds'>
        <p>All breads</p><img src="/dropdownarrow.svg" alt="" />
      </button>
      <button className='dropdown__btn limit'>
        <p>Limit: 10</p><img src="/dropdownarrow.svg" alt="" />
      </button>
      <button className='alphabet__btn'>
        <img src="/a-b.svg" alt="" />
      </button>
      <button className='alphabet__btn'>
        <img src="/b-a.svg" alt="" />
      </button>
      </div>
      <CustomGrid images={imgs} breeds={breednames} />
    </div>
  )
}

export default BreedsDisplay