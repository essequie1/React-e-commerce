import { CartWidget, WishlistWidget, SessionWidget, CategoriesMenu, BrandsMenu } from './componentsIndex';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss';

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__logo">SARTORIAL</h1>
      </Link>
      <nav className="nav">
        <CategoriesMenu />
        <BrandsMenu />
        {/* <NavLink className={({ isActive }) => (isActive ? 'nav__link--selected' : 'nav__link')} to="/category/tops">
          TOPS
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--selected' : 'nav__link')} to="/category/bottoms">
          BOTTOMS
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--selected' : 'nav__link')} to="/category/accessories">
          ACCESORIES
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav__link--selected' : 'nav__link')} to="/category/shoes">
          SHOES
        </NavLink> */}
        {/* <div className="menu">
          <p className="menu__option">BRANDS</p>
          <div className="menu__container">
            <Link to={'/brand/bape'}>
              <img src={brands.bape} alt="" />
              <div className="submenu">
                <Link to={'/brand/bape/shoes'}>shoes</Link>
                <Link to={'/brand/bape/bottoms'}>bottoms</Link>
                <Link to={'/brand/bape/tops'}>tops</Link>
                <Link to={'/brand/bape/accessories'}>accessories</Link>
              </div>
            </Link>
            <Link>
              <img src={brands['off-white']} alt="" />
              <div className="submenu">
                <Link to={'/brand/supreme/shoes'}>shoes</Link>
                <Link to={'/brand/supreme/bottoms'}>bottoms</Link>
                <Link to={'/brand/supreme/tops'}>tops</Link>
                <Link to={'/brand/supreme/accessories'}>accessories</Link>
              </div>
            </Link>
            <Link to={'/brand/supreme'}>
              <img src={brands.supreme} alt="" />
              <div className="submenu">
                <Link to={'/brand/supreme/shoes'}>shoes</Link>
                <Link to={'/brand/supreme/bottoms'}>bottoms</Link>
                <Link to={'/brand/supreme/tops'}>tops</Link>
                <Link to={'/brand/supreme/accessories'}>accessories</Link>
              </div>
            </Link>
            <Link>
              <img src={brands.obey} alt="" />
              <div className="submenu">
                <Link to={'/brand/supreme/shoes'}>shoes</Link>
                <Link to={'/brand/supreme/bottoms'}>bottoms</Link>
                <Link to={'/brand/supreme/tops'}>tops</Link>
                <Link to={'/brand/supreme/accessories'}>accessories</Link>
              </div>
            </Link>
          </div>
        </div> */}
        <WishlistWidget />
        <CartWidget />
        <SessionWidget />
      </nav>
    </header>
  );
};
