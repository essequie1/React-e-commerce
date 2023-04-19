import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutInformation.scss';

export const CheckoutInformation = () => {
  const { cart } = useProductsContext();
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.selectedQuantity, 0);

  return (
    <div className="checkout-information">
      <div className="checkout-information__breakdown">
        <span>
          Subtotal
          <p>
            {'$ '}
            {totalPrice.toFixed(2)}
          </p>
        </span>
        <span>
          Tax (7%)
          <p>
            {'$ '}
            {(totalPrice * 0.07).toFixed(2)}
          </p>
        </span>
        <span>
          Total
          <p>
            {'$ '}
            {(totalPrice * 1.07).toFixed(2)}
          </p>
        </span>
      </div>
      <div className="checkout-information__coupon">
        <label>
          You have a code?
          <input type="text" />
        </label>
        <button>Apply</button>
      </div>
    </div>
  );
};
