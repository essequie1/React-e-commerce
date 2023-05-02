import { addItemToWishlist, removeItemFromWishlist } from '../services/firestore';
import { useUserContext } from '../context/userContext';
import { checkWishlist } from '../helpers/checkWishlist';
import { toast } from 'react-toastify';

export const AddToWishlist = ({ product, variation }) => {
  const { userData, wishlist, addToWishlist, removeFromWishlist, isLoggedIn } = useUserContext();
  const isItemInWishlist = checkWishlist(wishlist, product.id + variation.color);

  const handleWishlist = () => {
    if (!isLoggedIn) return toast.error('You have to log in to add items to your wishlist');

    const { variations, gender, description, ...newItem } = product;
    const itemToAdd = {
      ...newItem,
      image: variation.images[0],
      color: variation.color,
      selectedQuantity: 1,
      id: product.id + variation.color,
    };

    if (isItemInWishlist) {
      toast
        .promise(removeItemFromWishlist(userData.uid, itemToAdd), {
          pending: 'Removing from wishlist...',
          success: 'Product removed from wishlist',
          error: 'An error occurred, please try again later',
        })
        .then(() => removeFromWishlist(itemToAdd.id));
    } else {
      toast
        .promise(addItemToWishlist(userData.uid, itemToAdd), {
          pending: 'Adding to wishlist...',
          success: 'Product added to wishlist',
          error: 'An error occurred, please try again later',
        })
        .then(() => addToWishlist(itemToAdd));
    }
  };

  return (
    <button className="buttons__wishlist" onClick={() => handleWishlist(product)}>
      <span className={`material-symbols-outlined ${isItemInWishlist ? 'wishlisted' : 'not-wishlisted'}`}>favorite</span>
    </button>
  );
};
