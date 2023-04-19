import { CartProduct } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import { Link } from 'react-router-dom';
import '../scss/CartContainer.scss';

export const CartContainer = ({ isShown, handleShowCart }) => {
  const { cart } = useProductsContext();
  return (
    <div className={isShown ? 'cart-container --active' : 'cart-container --inactive'}>
      <button className="cart-container__closeBtn" onClick={handleShowCart}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <p className="cart-container__title">Your Cart</p>
      <div className="cart-container__products">
        {cart.map(prod => (
          <CartProduct key={prod.id} product={prod} />
        ))}
      </div>
      <div className="cart-container__total">
        <p>Total</p>
        <p>
          {'$ '}
          {cart.reduce((acc, prod) => acc + prod.price * prod.selectedQuantity, 0)}
        </p>
      </div>
      <div className="cart-container__bottom">
        <Link onClick={handleShowCart} className="checkout" to="/checkout">
          Go to Checkout
        </Link>
        <button className="clear-cart">
          <span className="material-symbols-outlined">backspace</span>
        </button>
      </div>
    </div>
  );
};
