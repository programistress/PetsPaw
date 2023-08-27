import React from 'react'

interface ImgProps {
  image: string;
  breed?: string;
  className: string;
}

const Image = (props: ImgProps) => {
  return (
    <div>
      <img className={props.image ? props.className : 'no_img'} src={props.image} />
      <a className='img__link' href="">
      <div className="img__hidden">
        <h4 className='img__title'>{props.breed}</h4>
      </div>
      </a>
    </div>
  )
}

export default Image