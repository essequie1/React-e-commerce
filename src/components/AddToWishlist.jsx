import { addItemToWishlist, removeItemFromWishlist } from '../services/firestore';
import { useUserContext } from '../context/userContext';
import { checkWishlist } from '../helpers/checkWishlist';
import { toast } from 'react-toastify';

export const AddToWishlist = ({ product, variation }) => {
  const { userData, wishlist, addToWishlist, removeFromWishlist, isLoggedIn } = useUserContext();
  const isItemInWishlist = checkWishlist(wishlist, product.id + variation.color);

  const handleWishlist = () => {
    if (isLoggedIn) {
      const { variations, gender, description, ...newItem } = product;
      const itemToAdd = {
        ...newItem,
        image: variation.images[0],
        color: variation.color,
        selectedQuantity: 1,
        id: product.id + variation.color,
      };

      const notification = toast.loading('Loading...');

      if (isItemInWishlist) {
        removeItemFromWishlist(userData.uid, itemToAdd)
          .then(() => removeFromWishlist(itemToAdd.id))
          .then(() => toast.update(notification, { render: 'Product removed from wishlist', type: 'success', autoClose: 3000, isLoading: false }));
      } else {
        addItemToWishlist(userData.uid, itemToAdd)
          .then(() => addToWishlist(itemToAdd))
          .then(() => toast.update(notification, { render: 'Product added to wishlist', type: 'success', autoClose: 3000, isLoading: false }));
      }
    } else {
      toast.error('You have to log in to add items to your wishlist');
    }
  };

  return (
    <button className="buttons__wishlist" onClick={() => handleWishlist(product)}>
      <span className={`material-symbols-outlined ${isItemInWishlist ? 'wishlisted' : 'not-wishlisted'}`}>favorite</span>
    </button>
  );
};
