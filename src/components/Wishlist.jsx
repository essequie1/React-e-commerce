import { useUserContext } from '../context/userContext';
import { WishlistProduct } from './componentsIndex';
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
        <p>Your whislist is empty</p>
      )}
    </div>
  );
};
