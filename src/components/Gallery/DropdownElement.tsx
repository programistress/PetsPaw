import React from 'react'

type Props = {
  label: string,
  placeholder: string,
  choices?: Array<string>
}

const DropdownElement = (props: Props) => {
  return (
    <div className='sorting__dropdown'>
      <h4 className='dropdown__label'>{props.label}</h4>
      <button className='sorting__btn'>
        <p>{props.placeholder}</p>
        <img src="/dropdownarrow.svg" alt="" />
      </button>
    </div>
  )
}

export default DropdownElement