import { useContext, useState } from 'react';
import { userContext } from '../context/userContext';
import { Wishlist } from './Wishlist';
import '../scss/WishlistWidget.scss';
import { toast } from 'react-toastify';

const WishlistWidget = () => {
  const [isWishlistShown, setIsWishlistShown] = useState(false);
  const { userData } = useContext(userContext);

  const handleShowWishlist = () => {
    if (Object.keys(userData).length > 0) {
      setIsWishlistShown(curr => !curr);
    } else {
      toast.warning('You have to log in to have a wishlist');
    }
  };

  return (
    <div className="wishlist-widget">
      <button onClick={handleShowWishlist}>WISHLIST</button>
      {isWishlistShown ? <Wishlist /> : null}
    </div>
  );
};
export default WishlistWidget;
