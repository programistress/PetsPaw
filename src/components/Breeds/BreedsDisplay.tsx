import React from 'react'
import ActionHeader from '../Actions/ActionHeader'
import CustomGrid from '../CustomGrid/CustomGrid'
import './Display.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCats, changeArrayType, getAllCats, getArrayType, getImgArray } from '../../features/cats/catSlice'
import Dropdown from './Dropdown'



const BreedsDisplay = () => {
  const catsprev = useSelector(getAllCats)
  const arrayType = useSelector(getArrayType)
  const imgArray = useSelector(getImgArray)

  //because the api is broken and some element dont have an image
  const cats:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      cats.push(element)
    }
  })
  const imgsfull = cats.map((item) => (item.image.url))
  const breednames = cats.map((item) => (item.name))
  const imgs = imgArray.map((item) => (item.url))


  const dispatch = useDispatch()

  const alphabetA2Z = async () => {
    if (arrayType === 'full') {
    dispatch(changeArrayType('full'))
    fetch('https://api.thecatapi.com/v1/breeds/?order=ASC', {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(addCats(data)),
            status: response.status
          })))
    } else {
      // nothing :o
    }
  }

  const alphabetZ2A = async () => {
    if (arrayType === 'full') {
    dispatch(changeArrayType('full'))
    fetch('https://api.thecatapi.com/v1/breeds/?order=DESC', {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(addCats(data)),
            status: response.status
          })))
    }  else {
      // nothing :p
    }     
  }

  const breednamesingle:any = []
  if (arrayType != 'full') {
    for (let i = 0; i < 20; i++) {
      breednamesingle.push(arrayType)
  }
  }
  

  return (
    <div className='action__display-wrapper'>
      <div className='top__section'>
      <ActionHeader title='breeds' />
      <Dropdown
      />
      <button className='alphabet__btn1' onClick={alphabetA2Z}>
        <img src="/a-b.svg" alt="" />
      </button>
      <button className='alphabet__btn2' onClick={alphabetZ2A}>
        <img src="/b-a.svg" alt="" />
      </button>
      </div>
      <CustomGrid images={arrayType === 'full' ? imgsfull : imgs} breeds={arrayType === 'full' ? breednames : breednamesingle} />
    </div>
  )
}

export default BreedsDisplay