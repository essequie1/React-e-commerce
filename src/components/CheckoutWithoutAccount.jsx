import { toast } from 'react-toastify';
import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutWithoutAccount.scss';

export const CheckoutWithoutAccount = ({ children }) => {
  const { cart } = useProductsContext();

  const sizesSelected = cart.every(obj => Object.values(obj).every(value => value !== ''));

  const handleForm = e => {
    e.preventDefault();
    if (sizesSelected) {
      const fields = new FormData(e.target);
      const form = Object.fromEntries(fields);

      const ETA = new Date();
      ETA.setDate(ETA.getDate() + 7);
      const day = ETA.getDay();
      if (day === 0) {
        ETA.setDate(ETA.getDate() + 1);
      } else if (day === 6) {
        ETA.setDate(ETA.getDate() + 2);
      }

      const ID = 'OP-' + Date.parse(ETA) + Date.now() + cart.length.toString().padStart(3, '0');
      const order = { name: userData.name, email: userData.email, address: userData.address, orderProducts: cart, orderID: ID, ETA: ETA };
    } else {
      toast.error('Please select sizes for all the clothes!');
    }
  };

  return (
    <>
      <form onSubmit={handleForm} className="checkout-form">
        <label className="checkout-form__label">
          Your Name
          <input name="name" required placeholder="Bart Simpson" type="text" />
        </label>
        <label className="checkout-form__label">
          Contact Mail
          <input name="email" required placeholder="bartjojosimpson@email.com" type="email" />
        </label>
        <label className="checkout-form__label">
          Address
          <input name="address" required placeholder="742 Evergreen Terrace, Springfield MA" type="text" />
        </label>
        {children}
        <button type="submit" className="checkout-form__submit">
          Payment
        </button>
      </form>
    </>
  );
};
