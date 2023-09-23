import React from 'react'
import './CustomGrid.css'
import Image from './Image';


interface BreedProps {
  images: Array<string>;
  breeds?: Array<string>;
}


const CustomGrid = (props: BreedProps) => {


  // i need to have separate variable for every row and display it by limit state
  props.images.map((img) =>  {

  })

  return (
    <div className='grid'>
      <div className='row'>
        <Image className={props.images[0] ? 'medium rounded' : ''} image={props.images[0]} />
        <Image className={props.images[1] ? 'standart rounded' : ''} image={props.images[1]} />
        <Image className={props.images[2] ? 'standart rounded' : ''} image={props.images[2]} />
      </div>
      <div className='row'>
      <Image className={props.images[3] ? 'standart rounded' : ''} image={props.images[3]} />
      <Image className={props.images[4] ? 'big col2row2 rounded' : ''} image={props.images[4]} />
      </div>
      <div className='row'>
      <Image className={props.images[5] ? 'standart rounded' : ''} image={props.images[5]} />
      <Image className={props.images[6] ? 'standart rounded' : ''} image={props.images[6]} />
      <Image className={props.images[7] ? 'medium col3row3 rounded' : ''} image={props.images[7]} />
      </div>
      <div className='row4'>
      <Image className={props.images[8] ? 'big col1row4 rounded' : ''} image={props.images[8]} />
      <Image className={props.images[9] ? 'standart col2row4 rounded' : ''} image={props.images[9]} />
      </div>
    </div>
  )
}

export default CustomGrid