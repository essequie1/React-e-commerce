import { AddToWishlist, ItemDetailCounter } from './componentsIndex';
import { useProductsContext } from '../context/productsContext';
import { useState } from 'react';
import { brands } from '../assets/imagesIndex';
import { checkCart } from '../helpers/checkCart';
import { toast } from 'react-toastify';
import '../scss/ItemDetail.scss';

export const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [variation, setVariation] = useState(0);
  const { addToCart, cart, changeProductQuantity, sizes } = useProductsContext();
  const prodID = product.id + product.variations[variation].color;
  const prodVariation = product.variations[variation];
  const isItemInCart = checkCart(cart, prodID);

  const handleAddToCart = () => {
    if (size === '') {
      toast.error('Please select a size first');
    } else {
      if (isItemInCart) {
        const productInCartQty = cart.find(prod => prod.id === prodID).selectedQuantity;
        const newQuantity = productInCartQty + quantity;
        if (newQuantity > 5) {
          toast.error('Maximum amount per item is 5...');
        } else {
          changeProductQuantity(prodID, newQuantity);
          toast.success('Products added, new quantity is ' + newQuantity);
        }
      } else {
        const { variations, gender, description, ...newItem } = product;
        const itemToAdd = {
          ...newItem,
          image: prodVariation.images[0],
          color: prodVariation.color,
          selectedSize: size,
          selectedQuantity: quantity,
          id: prodID,
        };
        addToCart(itemToAdd);
        toast.success('Product added to bag');
      }
    }
  };

  return (
    <div className="details">
      <div className="details__images">
        <img loading="lazy" decoding="async" src={prodVariation.images[0]} alt="" />
        <img loading="lazy" decoding="async" src={prodVariation.images[1]} alt="" />
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
          <div className="variations__buttons">
            {product.variations.map((product, idx) => (
              <button
                className={variation === idx ? 'variations__btn--active' : 'variations__btn'}
                key={product.color}
                onClick={() => setVariation(idx)}
                style={{ backgroundColor: product.color }}
              ></button>
            ))}
          </div>
        </div>
        <ItemDetailCounter setQuantity={setQuantity} quantity={quantity} />
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
            ADD TO BAG
          </button>
          <AddToWishlist product={product} variation={prodVariation} />
        </div>
      </div>
    </div>
  );
};
