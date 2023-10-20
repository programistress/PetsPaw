import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCats, setBreedGallery } from '../../features/cats/catSlice';

type Props = {
  label: string,
  className: string,
  hidden: string,
}

const DropdownElementBreed = (props: Props) => {
  const {
    label,
    className,
    hidden
  } = props;
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false)
  const handle = () => {
    setDropdownVisible(!dropdownVisible)
  }
  const [pickedValue, setPickedValue] = useState('All breads')
  const dispatch = useDispatch()

  const pickOption = (id, name) => {
    setPickedValue(name)
    dispatch(setBreedGallery(id))
  }

  const pickAllBreads = () => {
    setPickedValue('All breads')
    dispatch(setBreedGallery('all'))
  }

  const catsprev = useSelector(getAllCats)
  const cats:any = []
  catsprev.map((element) => {
    if(element.hasOwnProperty('image')){
      cats.push(element)
    }
  })

 
  return (
    <div className= {dropdownVisible ? className : hidden}>
      <h4 className='dropdown__label'>{label}</h4>
      <button className='sorting__btn' onClick={handle}>
        <div className="dropdown__params">
        <div className="dropdown__title_">
          <h3>{pickedValue}</h3>
          <img src="/dropdownarrow.svg" alt="" />
        </div>
        <p onClick={() =>pickAllBreads()}>All breads</p>
        {cats.map((param) => (
        <p
        onClick={() => pickOption(param.id, param.name)}
        >
        {param.name}
        </p>
      ))}
      </div>
      </button>
    </div>
  )
}

export default DropdownElementBreed