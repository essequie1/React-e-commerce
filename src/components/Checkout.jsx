import { CheckoutInformation, CheckoutProduct } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import '../scss/Checkout.scss';
import { useUserContext } from '../context/userContext';
import { CheckoutWithoutAccount } from './CheckoutWithoutAccount';
import { CheckoutWithAccount } from './CheckoutWithAccount';

export const Checkout = () => {
  const { cart } = useProductsContext();
  const { userData } = useUserContext();
  return (
    <div className="checkout-container">
      <div className="checkout-main">
        <div className="checkout-main__products">
          {cart.map(prod => (
            <CheckoutProduct key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
      <div className="checkout-side">
        {Object.keys(userData).length === 0 ? (
          <CheckoutWithoutAccount>
            <CheckoutInformation />
          </CheckoutWithoutAccount>
        ) : (
          <CheckoutWithAccount>
            <CheckoutInformation />
          </CheckoutWithAccount>
        )}
      </div>
    </div>
  );
};
