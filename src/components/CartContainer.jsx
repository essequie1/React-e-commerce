import { CartProduct } from './CartProduct';
import { useProductsContext } from '../context/productsContext';
import '../scss/CartContainer.scss';

export const CartContainer = ({ isShown, handleShowCart }) => {
  const { cart } = useProductsContext();
  return (
    <div className={isShown ? 'cart-container --active' : 'cart-container --inactive'}>
      <button onClick={handleShowCart}>
        <span class="material-symbols-outlined">close</span>
      </button>
      <p className="cart-container__title">Your Cart</p>
      <div className="cart-container__products">
        {cart.map(prod => (
          <CartProduct product={prod} />
        ))}
      </div>
    </div>
  );
};
