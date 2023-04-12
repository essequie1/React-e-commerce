import { useContext } from 'react';
import { userContext } from '../context/userContext';
import '../scss/WishlistWidget.scss';

const WishlistWidget = () => {
  const { wishlist, userData } = useContext(userContext);

  return (
    <>
      <button className="wishlist-widget">WISHLIST</button>
      {Object.keys(userData).length > 0 ? (
        wishlist.length > 0 ? (
          <h1>Tu wishlist es...</h1>
        ) : (
          <h1>Tu wishlist esta vacia</h1>
        )
      ) : (
        <h1>You have to log in to see your wishlist</h1>
      )}
    </>
  );
};
export default WishlistWidget;
