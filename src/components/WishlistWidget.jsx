import { useState, useEffect } from 'react';
import { useUserContext } from '../context/userContext';
import { Wishlist } from './Wishlist';
import { toast } from 'react-toastify';
import '../scss/WishlistWidget.scss';

export const WishlistWidget = () => {
  const [isWishlistShown, setIsWishlistShown] = useState(false);
  const { userData } = useUserContext();

  // Effect for menu closing when clicking outside of it
  useEffect(() => {
    const closeMenu = e => {
      const path = e.composedPath();
      const isInside = path.filter(elm => elm.className === 'wishlist-widget');
      if (isInside.length === 0) {
        setIsWishlistShown(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

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
