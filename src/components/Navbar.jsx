import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo-light.svg';
import '../scss/Navbar.scss';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="SARTORIAL" />
      </Link>
      <nav className="nav">
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/jewelery">
          JEWELERY
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/electronics">
          ELECTRONICS
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/men's clothing">
          MEN
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')} to="/category/women's clothing">
          WOMEN
        </NavLink>
        {/* <a href="#">
          SALE <span>HOT</span>
        </a> */}
        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;
