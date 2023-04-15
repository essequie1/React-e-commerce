import { CartProduct } from './CartProduct';
import { useProductsContext } from '../context/productsContext';
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
          {cart.reduce((acc, prod) => acc + prod.price, 0)}
        </p>
      </div>
      <div className="cart-container__bottom">
        <button className="checkout">Go to Checkout</button>
        <button className="clear-cart">
          <span className="material-symbols-outlined">backspace</span>
        </button>
      </div>
    </div>
  );
};
