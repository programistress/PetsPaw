import React from 'react'
import './CustomGrid.css'
import Image from '../Image';

interface BreedProps {
  images: Array<string>;
}


const CustomGridVoting = (props: BreedProps) => {
  return (
    <div className='grid'>
      {/* 1 */}
      <div className='row'>
        <Image className={props.images[0] ? 'medium rounded' : ''} image={props.images[0]} />
        <Image className={props.images[1] ? 'standart rounded' : ''} image={props.images[1]} />
        <Image className={props.images[2] ? 'standart rounded' : ''} image={props.images[2]} />
      </div>
         {/* 2  5 */}
      <div className='row'>
        <Image className={props.images[3] ? 'standart rounded' : ''} image={props.images[3]} />
        <Image className={props.images[4] ? 'big col2row2 rounded' : ''} image={props.images[4]} />
      </div>
         {/* 3 */}
      <div className='row'>
        <Image className={props.images[5] ? 'standart rounded' : ''} image={props.images[5]} />
        <Image className={props.images[6] ? 'standart rounded' : ''} image={props.images[6]} />
        <Image className={props.images[7] ? 'medium col3row3 rounded' : ''} image={props.images[7]} />
      </div>
         {/* 4  10 */}
      <div className='row4'>
        <Image className={props.images[8] ? 'big col1row4 rounded' : ''} image={props.images[8]} />
        <Image className={props.images[9] ? 'standart col2row4 rounded' : ''} image={props.images[9]} />
      </div>
         {/* 5 */}
      <div className='row'>
        <Image className={props.images[10] ? 'medium rounded' : ''} image={props.images[10]} />
        <Image className={props.images[11] ? 'standart rounded' : ''} image={props.images[11]} />
        <Image className={props.images[12] ? 'standart rounded' : ''} image={props.images[12]} />
      </div>
         {/* 6  15 */}
      <div className='row'>
        <Image className={props.images[13] ? 'standart rounded' : ''} image={props.images[13]} />
        <Image className={props.images[14] ? 'big col2row2 rounded' : ''} image={props.images[14]} />
      </div>
         {/* 7 */}
      <div className='row'>
        <Image className={props.images[15] ? 'standart rounded' : ''} image={props.images[15]} />
        <Image className={props.images[16] ? 'standart rounded' : ''} image={props.images[16]} />
        <Image className={props.images[17] ? 'medium col3row3 rounded' : ''} image={props.images[17]} />
      </div>
         {/* 8 20 */}
      <div className='row4'>
        <Image className={props.images[18] ? 'big col1row4 rounded' : ''} image={props.images[18]} />
        <Image className={props.images[19] ? 'standart col2row4 rounded' : ''} image={props.images[19]} />
      </div>
    </div>
  )
}

export default CustomGridVoting