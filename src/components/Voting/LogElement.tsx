import React from 'react'

type Props = {
  time: string;
  imgID: string;
  iconSrc: string;
  actionName: string;
}

const LogElement = (props: Props) => {
  return (
    <div className='log__wrapper'>
      <span className='time'>{props.time}</span>
      <h4>Image ID: <span className='id'>{props.imgID}</span> was added to {props.actionName}</h4>
      <img src={props.iconSrc} alt={props.iconSrc} />
    </div>
  )
}

export default LogElement