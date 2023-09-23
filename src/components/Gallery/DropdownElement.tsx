import React, { useState } from 'react'

type Props = {
  label: string,
  placeholder: string,
  params?: Array<string>,
  className: string,
  hidden: string
}

const DropdownElement = (props: Props) => {
  const {
    label,
    placeholder,
    params,
  } = props;
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false)
  const handle = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const pickOption = () => {

  }
  return (
    <div className='sorting__dropdown'>
      <h4 className='dropdown__label'>{label}</h4>
      <button className='sorting__btn' onClick={handle}>
        <p onClick={pickOption}>{placeholder}</p>
        <img src="/dropdownarrow.svg" alt="" />
      </button>
    </div>
  )
}

export default DropdownElement