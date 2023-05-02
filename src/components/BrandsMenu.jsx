import { Link } from 'react-router-dom';
import { brandsMenu } from '../helpers/menus';
import { useHoverMenu } from '../hooks/useHoverMenu';
import '../scss/BrandsMenu.scss';

export const BrandsMenu = () => {
  const { isShown, hoverRef } = useHoverMenu();

  return (
    <div ref={hoverRef} className="brands">
      <p className="brands__option">BRANDS</p>
      {isShown && (
        <ul className="brands-list">
          {brandsMenu.map(item => (
            <li key={item.brand}>
              <BrandDropdown menus={item.menus} brand={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BrandDropdown = ({ menus, brand }) => {
  const { isShown, hoverRef } = useHoverMenu();
  return (
    <div ref={hoverRef} className="dropdown">
      <Link className="dropdown__link" to={brand.url}>
        <img src={brand.image} alt="" />
      </Link>
      {isShown && (
        <ul className="categories-container">
          {menus.map(menu => (
            <div className="categories-menu" key={menu.menuTitle}>
              <p className="categories-menu__title">{menu.menuTitle}</p>
              <ul className="categories-list">
                {menu.options.map(option => (
                  <li key={option.title}>
                    <Link className="categories-list__item" to={option.url}>
                      {option.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
