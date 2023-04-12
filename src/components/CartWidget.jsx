import { useContext } from 'react';
import { productsContext } from '../context/productsContext';
import '../scss/CartWidget.scss';

const CartWidget = () => {
  const { cart } = useContext(productsContext);

  return (
    <button className="cart">
      <span className="material-symbols-outlined cart__icon">shopping_bag</span>
      {cart.length > 0 ? <span className="cart__qty">{cart.length}</span> : null}
    </button>
  );
};

export default CartWidget;
