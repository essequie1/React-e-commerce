import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProductsContext } from '../context/productsContext';
import { checkSelectedSizes } from '../helpers/checkSelectedSizes';
import { generateOrderID } from '../helpers/generateOrderID';
import { getETA } from '../helpers/getETA';
import { createOrder } from '../services/firestore';
import '../scss/CheckoutWithoutAccount.scss';

export const CheckoutWithoutAccount = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useProductsContext();
  const sizesSelected = checkSelectedSizes(cart);
  const navigation = useNavigate();

  const handleForm = async e => {
    e.preventDefault();
    if (sizesSelected) {
      const fields = new FormData(e.target);
      const form = Object.fromEntries(fields);

      const ETA = getETA();
      const ID = generateOrderID(cart, ETA);
      const order = { name: form.name, email: form.email, address: form.address, orderProducts: cart, orderID: ID, ETA: ETA };
      setLoading(true);
      await toast
        .promise(createOrder(order), {
          pending: 'Generating Order...',
          success: 'Order generated successfully',
          error: 'An error occured, please try again',
        })
        .then(() => clearCart())
        .then(() => navigation(`/orders/${ID}`));
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
        <button disabled={loading} type="submit" className="checkout-form__submit">
          {loading ? 'Loading...' : 'Payment'}
        </button>
      </form>
    </>
  );
};
