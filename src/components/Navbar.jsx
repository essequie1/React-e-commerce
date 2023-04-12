import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import WishlistWidget from './WishlistWidget';
import SessionWidget from './SessionWidget';
import logo from '../assets/logo-light.svg';
import '../scss/Navbar.scss';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="SARTORIAL" />
      </Link>
      <nav className="nav">
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/tops">
          TOPS
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/bottoms">
          BOTTOMS
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/accessories">
          ACCESORIES
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/shoes">
          SHOES
        </NavLink>
        <WishlistWidget />
        <CartWidget />
        <SessionWidget />
      </nav>
    </header>
  );
};

export default Navbar;
