import { useProductsContext } from '../context/productsContext';
import { useUserContext } from '../context/userContext';

export const CheckoutSidebar = () => {
  const { cart } = useProductsContext();
  const { userData } = useUserContext();
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.selectedQuantity, 0);

  return (
    <div className="checkout-side">
      {Object.keys(userData).length > 0 ? <UserData /> : <UserForm />}
      <div className="checkout-side__coupon">
        <label htmlFor="">
          You have a code?
          <input type="text" name="" id="" />
        </label>
        <button>Apply</button>
      </div>
      <div className="checkout-side__total">
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
      <button className="checkout-side__payment" onClick={() => console.log(cart)}>
        Payment
      </button>
    </div>
  );
};

const UserData = () => {
  const { userData } = useUserContext();
  return (
    <div className="checkout-side__user">
      <p>
        Contact
        <br />
        <strong>{userData.email}</strong>
      </p>
      <p>
        Sending to
        <br />
        <strong>
          {userData.address}, {userData.city} ({userData.zip})
        </strong>
      </p>
    </div>
  );
};

const UserForm = () => {
  return (
    <div className="checkout-side__form">
      <label htmlFor="">
        Contact
        <input type="text" />
      </label>
      <label htmlFor="">
        Address
        <input type="text" />
      </label>
    </div>
  );
};
