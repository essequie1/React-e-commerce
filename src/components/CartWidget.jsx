import { useEffect, useState } from 'react';
import { useProductsContext } from '../context/productsContext';
import { CartContainer } from './componentsIndex';
import '../scss/CartWidget.scss';

export const CartWidget = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const { cart } = useProductsContext();

  // Effect for menu closing when clicking outside of it
  useEffect(() => {
    const closeMenu = e => {
      const path = e.composedPath();
      const isInside = path.filter(elm => elm.className === 'cart-container --active');
      if (isInside.length === 0 && path[0].className !== 'cart-widget-icon material-symbols-outlined') {
        setIsCartShown(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  const handleShowCart = () => {
    setIsCartShown(curr => !curr);
  };

  return (
    <>
      <div className="cart-widget">
        <button onClick={handleShowCart} className="cart-widget__btn">
          <span className="cart-widget-icon material-symbols-outlined">shopping_bag</span>
          {cart.length > 0 ? <span className="cart-widget__qty">{cart.length}</span> : null}
        </button>
      </div>
      <CartContainer isShown={isCartShown} handleShowCart={handleShowCart} />
    </>
  );
};
