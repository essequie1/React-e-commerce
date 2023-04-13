import { useContext, useState } from 'react';
import { userContext } from '../context/userContext';
import { Wishlist } from './Wishlist';
import '../scss/WishlistWidget.scss';

const WishlistWidget = () => {
  const [isWishlistShown, setIsWishlistShown] = useState(false);
  const { userData } = useContext(userContext);

  return (
    <div className="wishlist-widget">
      <button onClick={() => setIsWishlistShown(curr => !curr)}>WISHLIST</button>
      {isWishlistShown ? <>{Object.keys(userData).length > 0 ? <Wishlist /> : <h1>You have to log in to see your wishlist</h1>}</> : null}
    </div>
  );
};
export default WishlistWidget;
