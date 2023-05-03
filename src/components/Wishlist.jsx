import { WishlistProduct } from './componentsIndex';
import { useUserContext } from '../context/userContext';
import '../scss/Wishlist.scss';

export const Wishlist = () => {
  const { wishlist } = useUserContext();
  return (
    <div className="wishlist">
      {wishlist.length > 0 ? (
        <>
          {wishlist.map(product => (
            <WishlistProduct key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p className="wishlist__empty">Your whislist is empty</p>
      )}
    </div>
  );
};
