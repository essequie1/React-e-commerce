import { Link, useNavigate } from 'react-router-dom';
import '../scss/CheckoutConfirmation.scss';

export const CheckoutConfirmation = ({ removeNotice, closeMenu }) => {
  const navigation = useNavigate();
  const handleButtons = route => {
    closeMenu();
    removeNotice();
    navigation(route);
  };

  return (
    <div className="checkout-confirmation">
      <h4 className="checkout-confirmation__notice">Your experience would be better with an account.</h4>
      <div className="checkout-confirmation__buttons">
        <button onClick={() => handleButtons('/signup')} className="checkout-confirmation__signup">
          Sing Up
        </button>
        <button onClick={() => handleButtons('/login')} className="checkout-confirmation__login">
          Log In
        </button>
      </div>
      <Link
        onClick={() => {
          closeMenu();
          removeNotice();
        }}
        className="checkout-confirmation__proceed"
        to={'/checkout'}
      >
        Proceed to checkout anyways...
      </Link>
    </div>
  );
};
