import { CheckoutProduct, CheckoutSidebar } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import '../scss/Checkout.scss';

export const Checkout = () => {
  const { cart } = useProductsContext();
  return (
    <div className="checkout-container">
      <div className="checkout">
        <div className="checkout__products">
          {cart.map(prod => (
            <CheckoutProduct key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
      <CheckoutSidebar />
    </div>
  );
};
