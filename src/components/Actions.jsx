import votingimg from '../assets/header-assets/voting-img.png'
import galleryimg from '../assets/header-assets/gallery-img.png'
import breedsimg from '../assets/header-assets/breeds-img.png'

const Actions = () => {
  return (
    <div className='action__wrapper'>
      <div className="action">
        <div className='voting__bg'>
        <img className='action__img' src={votingimg} alt="voting" />
        </div>
        <button className='action__btn'>voting</button>
      </div>
      <div className="action">
        <div className="breeds__bg">
        <img className='action__img-breeds' src={breedsimg} alt="breeds" />
        </div>
        <button className='action__btn'>breeds</button>
      </div>
      <div className="action">
        <div className="gallery__bg">
        <img className='action__img-gallery' src={galleryimg} alt="gallery" />
        </div>
        <button className='action__btn'>gallery</button>
      </div>
      {/* each of this could be just a reusable component */}
      {/* need to change export to svg for netter quality */}
    </div>
  )
}

export default Actions