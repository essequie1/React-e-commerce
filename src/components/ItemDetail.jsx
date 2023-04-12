import { useContext, useState } from 'react';
import bapeLogo from '../assets/brands/bape.png';
import offwhiteLogo from '../assets/brands/off-white.png';
import supremeLogo from '../assets/brands/supreme.png';
import obeyLogo from '../assets/brands/obey.png';
import { toast } from 'react-toastify';
import { addItemToWishlist, removeItemFromWishlist } from '../services/firestore';
import { userContext } from '../context/userContext';
import '../scss/ItemDetail.scss';
import { productsContext } from '../context/productsContext';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const brands = {
  bape: bapeLogo,
  'off-white': offwhiteLogo,
  supreme: supremeLogo,
  obey: obeyLogo,
};

const ItemDetail = ({ product }) => {
  const { userData, wishlist, addToWishlist, removeFromWishlist } = useContext(userContext);
  const { addToCart } = useContext(productsContext);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState('');
  const [variation, setVariation] = useState(0);

  const variationsArr = Object.values(product?.variations);
  const isItemInWishlist = wishlist.filter(productDB => productDB.id === product.id).length > 0;

  const handleWishlist = prod => {
    const notification = toast.loading('Loading...');
    if (isItemInWishlist) {
      removeItemFromWishlist(userData.uid, prod)
        .then(() => removeFromWishlist(prod.id))
        .then(() => toast.update(notification, { render: 'Product removed from wishlist', type: 'success', autoClose: 3000, isLoading: false }));
    } else {
      addItemToWishlist(userData.uid, prod)
        .then(() => addToWishlist(prod))
        .then(() => toast.update(notification, { render: 'Product added to wishlist', type: 'success', autoClose: 3000, isLoading: false }));
    }
  };

  const handleAddToCart = () => {
    const itemToAdd = { ...product, image: variationsArr[variation].images[0], color: variationsArr[variation].color };

    delete itemToAdd.variations;
    delete itemToAdd.description;
    delete itemToAdd.gender;
    delete itemToAdd.category;

    addToCart(itemToAdd);
    toast.success('Product added to cart');
  };

  return (
    <div className="details">
      <div className="details__images">
        <img src={variationsArr[variation].images[0]} alt="" />
        <img src={variationsArr[variation].images[1]} alt="" />
        <img className="brand" src={brands[product.brand]} alt={product.brand} />
      </div>
      <div className="details__sidebar">
        <div className="information">
          <h4 className="information__title">{product.title}</h4>
          <p className="information__description">{product.description}</p>
          <p className="information__price">$ {product.price.toFixed(2)}</p>
        </div>
        <div className="variations">
          <p className="variations__title">COLORS:</p>
          {variationsArr.map((product, idx) => (
            <button
              className={variation === idx ? 'variations__btn--active' : 'variations__btn'}
              key={product.color}
              onClick={() => setVariation(idx)}
              style={{ backgroundColor: product.color }}
            ></button>
          ))}
        </div>
        <div className="quantity">
          <p className="quantity__title">QUANTITY:</p>
          <button className="quantity__btn" disabled={quantity < 1} onClick={() => setQuantity(curr => curr - 1)}>
            -
          </button>
          <p className="quantity__value">{quantity}</p>
          <button className="quantity__btn" onClick={() => setQuantity(curr => curr + 1)}>
            +
          </button>
        </div>
        <div className="sizes">
          <p className="sizes__title">SIZES:</p>
          <div className="sizes__btn-container">
            {sizes.map(sizebtn => (
              <button className={size === sizebtn ? 'sizes__btn--active' : 'sizes__btn'} key={sizebtn} onClick={() => setSize(sizebtn)}>
                {sizebtn}
              </button>
            ))}
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleAddToCart} className="buttons__cart">
            Add to cart
          </button>
          <button className="buttons__wishlist" onClick={() => handleWishlist(product)}>
            <span className={`material-symbols-outlined ${isItemInWishlist ? 'wishlisted' : 'not-wishlisted'}`}>favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
