import { toast } from 'react-toastify';
import { useUserContext } from '../context/userContext';
import { useProductsContext } from '../context/productsContext';
import { removeItemFromWishlist } from '../services/firestore';
import '../scss/WishlistProduct.scss';

export const WishlistProduct = ({ product }) => {
  const { userData, removeFromWishlist } = useUserContext();
  const { addToCart, cart } = useProductsContext();

  const isInsideCart = cart.find(obj => obj.id === product.id);

  const handleRemove = () => {
    const notification = toast.loading('Removing...');
    removeItemFromWishlist(userData.uid, product)
      .then(() => removeFromWishlist(product.id))
      .finally(() => toast.update(notification, { render: 'Product removed from wishlist', type: 'success', autoClose: 3000, isLoading: false }));
  };

  const handleAddToCart = () => {
    const itemToAdd = { ...product, selectedSize: '' };
    if (isInsideCart) {
      toast.error('This product is already inside your bag');
    } else {
      addToCart(itemToAdd);
      toast.success('Product added to bag');
    }
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
