import { useProductsContext } from '../context/productsContext';
import { useUserContext } from '../context/userContext';
import { useState } from 'react';
import { CartProduct, CheckoutConfirmation } from './componentsIndex';
import { Link, useNavigate } from 'react-router-dom';
import '../scss/CartContainer.scss';

export const CartContainer = ({ isShown, handleShowCart }) => {
  const [confirmation, setConfirmation] = useState(false);
  const { cart, clearCart } = useProductsContext();
  const { userData } = useUserContext();
  const navigation = useNavigate();

  const handleRedirect = () => {
    if (Object.keys(userData).length > 0) {
      navigation('/checkout');
    } else {
      setConfirmation(true);
    }
  };

  return (
    <div className={isShown ? 'cart-container --active' : 'cart-container --inactive'}>
      <button className="cart-container__closeBtn" onClick={handleShowCart}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <p className="cart-container__title">Your Cart</p>
      {cart.length > 0 ? (
        <>
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
            <button onClick={handleRedirect} className="checkout">
              Go to Checkout
            </button>
            <button onClick={() => clearCart()} className="clear-cart">
              <span className="material-symbols-outlined">backspace</span>
            </button>
          </div>
        </>
      ) : (
        <h4>Your cart is empty...</h4>
      )}
      {confirmation ? <CheckoutConfirmation closeMenu={handleShowCart} removeNotice={() => setConfirmation(false)} /> : null}
    </div>
  );
};
