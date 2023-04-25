import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutWithAccount.scss';
import { toast } from 'react-toastify';
import { createOrder } from '../services/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CheckoutWithAccount = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { userData } = useUserContext();
  const { cart, clearCart } = useProductsContext();
  const navigation = useNavigate();

  const sizesSelected = cart.every(obj => Object.values(obj).every(value => value !== ''));

  const handleData = () => {
    if (sizesSelected) {
      const ETA = new Date();
      ETA.setDate(ETA.getDate() + 7);
      const day = ETA.getDay();
      if (day === 0) {
        ETA.setDate(ETA.getDate() - 2);
      } else if (day === 6) {
        ETA.setDate(ETA.getDate() - 1);
      }

      const ID = 'OP-' + Date.parse(ETA) + Date.now() + cart.length.toString().padStart(3, '0');
      const order = { email: userData.email, address: userData.address, orderProducts: cart, orderID: ID, ETA: ETA.getTime() };
      const addOrderToDatabase = async () => {
        setLoading(true);
        await toast
          .promise(createOrder(order), {
            pending: 'Generating Order...',
            success: 'Order generated successfully',
            error: 'An error occured, please try again',
          })
          .then(() => clearCart())
          .then(() => navigation(`/orders/${ID}`));
      };
      addOrderToDatabase();
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
