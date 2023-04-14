import { useEffect, useState } from 'react';
import { useProductsContext } from '../context/productsContext';

import '../scss/CartWidget.scss';
import { CartContainer } from './CartContainer';

const CartWidget = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const { cart } = useProductsContext();

  useEffect(() => {
    console.log(isCartShown);
  }, [isCartShown]);

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

export default CartWidget;
