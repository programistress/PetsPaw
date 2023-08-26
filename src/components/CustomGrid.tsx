import React from 'react'
import './CustomGrid.css'
import Image from './Image';


interface BreedProps {
  images: Array<string>;
  breeds: Array<string>;
}


const CustomGrid = (props: BreedProps) => {

  return (
    <div className='grid'>
      <div className='row'>
        <Image className='medium rounded' breed={props.breeds[0]} image={props.images[0]} />
        <img className='standart rounded' src={props.images[1]} alt="" />
        <img className='standart rounded' src={props.images[2]} alt="" />
      </div>
      <div className='row'>
        <img className='standart rounded' src={props.images[3]} alt="" />
        <img className='big col2row2 rounded' src={props.images[4]} alt="" />
      </div>
      <div className='row'>
        <img className='standart rounded' src={props.images[5]} alt="" />
        <img className='standart rounded' src={props.images[6]} alt="" />
        <img className='medium col3row3 rounded' src={props.images[7]} alt="" />
      </div>
      <div className='row4'>
        <img className='big col1row4 rounded' src={props.images[8]} alt="" />
        <img className='standart col2row4 rounded' src={props.images[9]} alt="" />
      </div>
    </div>
  )
}

export default CustomGrid