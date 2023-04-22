import { CheckoutInformation, CheckoutProduct, CheckoutWithAccount, CheckoutWithoutAccount } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import { useUserContext } from '../context/userContext';
import '../scss/Checkout.scss';

export const Checkout = () => {
  const { cart } = useProductsContext();
  const { isLoggedIn } = useUserContext();
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
        {isLoggedIn ? (
          <CheckoutWithAccount>
            <CheckoutInformation />
          </CheckoutWithAccount>
        ) : (
          <CheckoutWithoutAccount>
            <CheckoutInformation />
          </CheckoutWithoutAccount>
        )}
      </div>
    </div>
  );
};
