import { removeItemFromWishlist } from '../services/firestore';
import { useProductsContext } from '../context/productsContext';
import { useUserContext } from '../context/userContext';
import { checkCart } from '../helpers/checkCart';
import { toast } from 'react-toastify';
import '../scss/WishlistProduct.scss';

export const WishlistProduct = ({ product }) => {
  const { userData, removeFromWishlist } = useUserContext();
  const { addToCart, cart } = useProductsContext();
  const isItemInCart = checkCart(cart, product.id);

  const handleRemove = () => {
    toast
      .promise(removeItemFromWishlist(userData.uid, product), {
        pending: 'Removing...',
        success: 'Product removed from wishlist',
        error: 'An error occurred, try again later',
      })
      .then(() => removeFromWishlist(product.id));
  };

  const handleAddToCart = () => {
    if (isItemInCart) return toast.error('This product is already inside your bag');

    const itemToAdd = { ...product, selectedSize: '', selectedQuantity: 1 };
    addToCart(itemToAdd);
    toast.success('Product added to bag');
  };

  return (
    <div className="wishlist-product">
      <img className="wishlist-product__image" src={product.image} alt="" />
      <div className="wishlist-product__color" style={{ backgroundColor: product.color }}></div>
      <h6 className="wishlist-product__title">{product.title}</h6>
      <p className="wishlist-product__price">$ {product.price.toFixed(2)}</p>
      <div className="wishlist-product__buttons">
        <button onClick={handleRemove}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <button onClick={handleAddToCart}>
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
    </div>
  );
};
