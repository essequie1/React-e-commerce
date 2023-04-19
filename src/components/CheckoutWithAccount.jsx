import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutWithAccount.scss';
import { toast } from 'react-toastify';

export const CheckoutWithAccount = ({ children }) => {
  const { userData } = useUserContext();
  const { cart } = useProductsContext();

  const sizesSelected = cart.every(obj => Object.values(obj).every(value => value !== ''));

  const handleData = () => {
    if (sizesSelected) {
      console.log('Form!');
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
      <button onClick={handleData} className="checkout-data__submit">
        Payment
      </button>
    </>
  );
};
