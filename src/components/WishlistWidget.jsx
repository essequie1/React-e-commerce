import { useUserContext } from '../context/userContext';
import { useToggleMenu } from '../hooks/useToggleMenu';
import { Wishlist } from './Wishlist';
import { toast } from 'react-toastify';
import '../scss/WishlistWidget.scss';

export const WishlistWidget = () => {
  const { isShown, toggleRef, handleToggle } = useToggleMenu();
  const { isLoggedIn } = useUserContext();

  const handleShowWishlist = () => {
    if (isLoggedIn) {
      handleToggle();
    } else {
      toast.warning('You have to log in to have a wishlist');
    }
  };

  return (
    <div ref={toggleRef} className="wishlist-widget">
      <button className="wishlist-widget__btn" onClick={handleShowWishlist}>
        <span className="wishlist-widget-icon material-symbols-outlined">loyalty</span>
      </button>
      {isShown ? <Wishlist /> : null}
    </div>
  );
};
export default WishlistWidget;
