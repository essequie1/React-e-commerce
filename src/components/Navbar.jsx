import '../scss/Navbar.scss';
import logo from '../assets/logo-light.svg';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <nav className="nav">
        <a href="#">COLECTIONS</a>
        <a href="#">SHOES</a>
        <a href="#">
          SALE <span>HOT</span>
        </a>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;
