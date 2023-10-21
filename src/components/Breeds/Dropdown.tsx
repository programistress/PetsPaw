import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCats, changeArrayType, getAllCats,  getLimit, setBreedId, setImgArray, setLimit } from '../../features/cats/catSlice';


const Dropdown = () => {
  //sorry that this component is so big :p

  //for dropdown ui
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false)
  const [dropdownVisibleLimit, setDropdownVisibleLimit] = useState<Boolean>(false)
  //onClick for dropdown appearing
  const handle = () => {
    setDropdownVisible(!dropdownVisible)
  }
  const handleLimit = () => {
    setDropdownVisibleLimit(!dropdownVisibleLimit)
  }
  
  //for dynamic titles
  const [pickedValueBreed, setPickedValueBreed] = useState('All breads')
  const pickedLimit = useSelector((getLimit))

  //for limit's options
  const limits = [ '5', '10', '15','20' ]

  const dispatch = useDispatch()

  //because the api is broken and some element dont have an image i remove them
  const catsprev = useSelector(getAllCats)
  const cats:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      cats.push(element)
    }
  })

  const startUrl = 'https://api.thecatapi.com/v1'

  //displaying only picked breed 
  const pickOption = async (id:string, name:string) => {
    dispatch(setBreedId(id))
    setPickedValueBreed(name)
    dispatch(changeArrayType(name))
   fetch(`${startUrl}/images/search?limit=67&breed_ids=${id}`, {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(setImgArray(data)),
            status: response.status
          })))
  }

 //displaying all breads again
  const pickAllBreads = async (name:string) => {
    setPickedValueBreed(name)
    dispatch(changeArrayType('full'))
   fetch(`${startUrl}/breeds/?limit=67`, {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(addCats(data)),
            status: response.status
          })))
  }


  //function to fetch with dynamic limit parametr
    const limitFunction = async (number:string) => {
    dispatch(setLimit(number))
  }

  return (
    <div>
    <button className={dropdownVisible ? "dropdown__btn breeds overflow": "dropdown__btn breeds hidden"} onClick={handle}>
      <div className='dropdown__title'><h3>{pickedValueBreed}</h3><img src="/dropdownarrow.svg"/></div>
      <div className='dropdown__params'>
      <p onClick={() => pickAllBreads('All Breads')}>All Breads</p>
      {cats.map((param) => (
        <p
        onClick={() => pickOption(param.id, param.name)}
        >
        {param.name}
        </p>
      ))}
      </div>
    </button>
    <button className={dropdownVisibleLimit ? "dropdown__btn limit overflow" : "dropdown__btn limit hidden"} onClick={handleLimit}>
      <div className='dropdown__title'><h3>Limit: {pickedLimit}</h3><img src="/dropdownarrow.svg"/></div>
      <div className='dropdown__params'>
      {limits.map((param) => (
        <p
        onClick={() => limitFunction(param)}
        >
        Limit: {param}
        </p>
      ))}
      </div>
    </button>
    </div>
  )
}

export default Dropdown