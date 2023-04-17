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
      if (isInside.length === 0 && path[0].className !== 'material-symbols-outlined cart__icon') {
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
    <div>
      <button onClick={() => setIsCartShown(curr => !curr)} className="cart">
        <span className="material-symbols-outlined cart__icon">shopping_bag</span>
        {cart.length > 0 ? <span className="cart__qty">{cart.length}</span> : null}
      </button>
      <CartContainer isShown={isCartShown} handleShowCart={handleShowCart} />
    </div>
  );
};
