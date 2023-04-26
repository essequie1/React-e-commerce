import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';
import { createOrder } from '../services/firestore';
import { useNavigate } from 'react-router-dom';
import { checkSelectedSizes } from '../helpers/checkSelectedSizes';
import { toast } from 'react-toastify';
import { generateOrderID } from '../helpers/generateOrderID';
import { getETA } from '../helpers/getETA';
import '../scss/CheckoutWithAccount.scss';

export const CheckoutWithAccount = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { userData } = useUserContext();
  const { cart, clearCart } = useProductsContext();
  const sizesSelected = checkSelectedSizes(cart);
  const navigation = useNavigate();

  const handleData = async () => {
    if (sizesSelected) {
      const ETA = getETA();
      const ID = generateOrderID(cart, ETA);
      const order = { email: userData.email, address: userData.address, orderProducts: cart, orderID: ID, ETA: ETA.getTime() };
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
      <div className="checkout-data">
        <span>
          Name
          <p>
            {userData.name} {userData.surname}
          </p>
        </span>
        <span>
          Contact
          <p>{userData.email}</p>
        </span>
        <span>
          Sending to
          <p>
            {userData.address}, {userData.city} ({userData.zip})
          </p>
        </span>
      </div>
      {children}
      <button disabled={loading} onClick={handleData} className="checkout-data__submit">
        {loading ? 'Loading...' : 'Payment'}
      </button>
    </>
  );
};
