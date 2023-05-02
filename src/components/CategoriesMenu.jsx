import { Link } from 'react-router-dom';
import { categoriesMenu } from '../helpers/menus';
import { useHoverMenu } from '../hooks/useHoverMenu';
import '../scss/CategoriesMenu.scss';

export const CategoriesMenu = () => {
  const { isShown, hoverRef } = useHoverMenu();

  return (
    <div ref={hoverRef} className="categories">
      <p className="categories__option">CATEGORIES</p>
      {isShown && (
        <div className="categories-container">
          {categoriesMenu.map(menu => (
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
        </div>
      )}
    </div>
  );
};
