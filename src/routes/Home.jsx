import "./Home.css";
import StickyHeader from "../components/StickyHeader";

const Header = () => {
  return (
    <header className="wrapper">
      <StickyHeader />
      <div className="header__img-bg">
        <img className="header__img" src="/girl-and-pet.svg" alt="home image" />
      </div>
    </header>
  );
};

export default Header;
