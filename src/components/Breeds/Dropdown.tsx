import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCats, changeArrayType, getAllCats, getArrayType, getBreedId, getLimit, setBreedId, setImgArray, setLimit } from '../../features/cats/catSlice';


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
  const limits = [
    {
      number: '5', 
    },
    {
      number: '10', 
    },
    {
      number: '15', 
    },
    {
      number: '20', 
    }
  ]

  const dispatch = useDispatch()
  const arrayType = useSelector(getArrayType)
  const breedId = useSelector(getBreedId)
  
  //because the api is broken and some element dont have an image i remove them
  const catsprev = useSelector(getAllCats)
  const cats:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      cats.push(element)
    }
  })

  const startUrl = 'https://api.thecatapi.com/v1'

  //displaying only picked breed with picked limit
  const pickOption = async (id:string, name:string) => {
    dispatch(setBreedId(id))
    setPickedValueBreed(name)
    dispatch(changeArrayType('img'))
   fetch(`${startUrl}/images/search?limit=${pickedLimit}&breed_ids=${id}`, {
      headers: {
        'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
      },
    }).then(response => response.json().then(data =>({
            data: dispatch(setImgArray(data)),
            status: response.status
          })))
  }
 //displaying all breads again with picked limit
  const pickAllBreads = async (name:string) => {
    setPickedValueBreed(name)
    dispatch(changeArrayType('full'))
   fetch(`${startUrl}/breeds/?limit=${pickedLimit}`, {
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

    if (arrayType === 'full'){
      fetch(`${startUrl}/breeds/?limit=${pickedLimit}`, {
        headers: {
          'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
        },
      }).then(response => response.json().then(data =>({
              data: dispatch(addCats(data)),
              status: response.status
            })))

    } else if (arrayType === 'img') {
      fetch(`${startUrl}/images/search?breed_ids=${breedId}&limit=${pickedLimit}`, {
        headers: {
          'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE',
        },
      }).then(response => response.json().then(data =>({
              data: dispatch(setImgArray(data)),
              status: response.status
            })))
    }

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
        onClick={() => limitFunction(param.number)}
        >
        Limit: {param.number}
        </p>
      ))}
      </div>
    </button>
    </div>
  )
}

export default Dropdown