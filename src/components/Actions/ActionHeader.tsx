import React from 'react'
import { Link } from "react-router-dom";

type Props = {
  title: string
}

const ActionHeader = (props: Props) => {
  return (
      <div className='action__header'>
        <Link to={`/`}>
        <button className='action__header-btn'></button>
        </Link>
        <h1 className='action__header-title'>{props.title}</h1>
      </div>
  )
}

export default ActionHeader