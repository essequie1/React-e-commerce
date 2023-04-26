import { useProductsContext } from '../context/productsContext';
import { CartContainer } from './componentsIndex';
import '../scss/CartWidget.scss';
import { useToggleMenu } from '../hooks/useToggleMenu';

export const CartWidget = () => {
  const { isShown, toggleRef, handleToggle } = useToggleMenu();
  const { cart } = useProductsContext();

  return (
    <div ref={toggleRef} className="cart-widget">
      <button onClick={handleToggle} className="cart-widget__btn">
        <span className="cart-widget-icon material-symbols-outlined">shopping_bag</span>
        {cart.length > 0 ? <span className="cart-widget__qty">{cart.length}</span> : null}
      </button>
      <CartContainer isShown={isShown} handleShowCart={handleToggle} />
    </div>
  );
};
