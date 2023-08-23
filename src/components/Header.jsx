import './Header.css'
import logo from '../assets/header-assets/Logo.svg'
import hi from '../assets/header-assets/Hi.svg'
import homeimg from '../assets/header-assets/girl-and-pet.svg'
import Actions from './Actions'

const Header = () => {
  return (
    <header className='wrapper'>
      <div className="header__wrapper">
      <img className='logo__img' src={logo} alt="" />
      <img className='hi__img' src={hi} alt="" />
        {/* sorry i used an img because i didnt have time to figure out how to make the ios emoji look like that on all devices */}
      <p className='header__desc'>Welcome to MacPaw Bootcamp 2023</p> 
      <h2 className='header__title'>Lets start using The Cat API</h2>
      <Actions />
      </div>
      <div className='header__img-bg'>
      <img className='header__img' src={homeimg} alt="home image" />
      </div>
    </header>
  )
}

export default Header