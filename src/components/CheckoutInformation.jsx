import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutInformation.scss';

export const CheckoutInformation = () => {
  const { cartTotal } = useProductsContext();

  return (
    <div className="checkout-information">
      <div className="checkout-information__breakdown">
        <span>
          Subtotal
          <p>{'$ ' + cartTotal}</p>
        </span>
        <span>
          Tax (7%)
          <p>{'$' + (cartTotal * 0.07).toFixed(2)}</p>
        </span>
        <span>
          Total
          <p>{'$' + (cartTotal * 1.07).toFixed(2)}</p>
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
