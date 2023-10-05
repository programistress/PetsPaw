import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBreedGallery } from '../../features/cats/catSlice';

type Props = {
  label: string,
  placeholder: string,
  className: string,
  hidden: string,
  params: Array<String>,
}

const DropdownElementBreed = (props: Props) => {
  const {
    label,
    placeholder,
    params,
    className,
    hidden
  } = props;
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false)
  const handle = () => {
    setDropdownVisible(!dropdownVisible)
  }
  const [pickedValue, setPickedValue] = useState('All breads')
  const dispatch = useDispatch()

  const pickOption = (param) => {
    setPickedValue(param)
    dispatch(setBreedGallery(param))
  }

  const pickAllBreads = () => {
    dispatch(setBreedGallery('all'))
  }

 
  return (
    <div className= {dropdownVisible ? className : hidden}>
      <h4 className='dropdown__label'>{label}</h4>
      <button className='sorting__btn' onClick={handle}>
        <div className="dropdown__params">
        <div className="dropdown__title_">
          <h3 onClick={() => pickOption(params[0])}>{pickedValue}</h3>
          <img src="/dropdownarrow.svg" alt="" />
        </div>
        <p onClick={() =>pickAllBreads()}>All breads</p>
        {params.map((param) => (
        <p
        onClick={() => pickOption(param)}
        >
        {param}
        </p>
      ))}
      </div>
      </button>
    </div>
  )
}

export default DropdownElementBreed