import { CheckoutInformation, CheckoutProduct, CheckoutWithAccount, CheckoutWithoutAccount } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import { useUserContext } from '../context/userContext';
import '../scss/Checkout.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Checkout = () => {
  const { cart } = useProductsContext();
  const { isLoggedIn } = useUserContext();
  const navigation = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigation('/notfound');
    }
  }, [cart]);

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
