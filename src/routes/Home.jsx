import '../components/Home.css'
import homeimg from '../assets/header-assets/girl-and-pet.svg'
import StickyHeader from '../components/StickyHeader'

const Header = () => {
  return (
    <header className='wrapper'>
      <StickyHeader />
      <div className='header__img-bg'>
      <img className='header__img' src={homeimg} alt="home image" />
      </div>
    </header>
  )
}

export default Header