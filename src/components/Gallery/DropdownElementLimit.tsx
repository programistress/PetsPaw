import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLimitGallery } from '../../features/cats/catSlice';

type Props = {
  label: string,
  className: string,
  hidden: string,
  params: Array<String>,
}

const DropdownElementLimit = (props: Props) => {
  const {
    label,
    params,
    className,
    hidden
  } = props;
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false)
  const handle = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const [pickedValue, setPickedValue] = useState(params[0])
  const dispatch = useDispatch()

  const pickOption = (param) => {
    setPickedValue(param)
    dispatch(setLimitGallery(param))
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

export default DropdownElementLimit