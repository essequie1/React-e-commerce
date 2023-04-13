import { useContext } from 'react';
import { userContext } from '../context/userContext';
import WishlistProduct from './WishlistProduct';
import '../scss/Wishlist.scss';

export const Wishlist = () => {
  const { wishlist } = useContext(userContext);
  return (
    <div className="wishlist">
      {wishlist.length > 0 ? (
        <>
          {wishlist.map(product => (
            <WishlistProduct key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p>Your whislist is empty</p>
      )}
    </div>
  );
};
