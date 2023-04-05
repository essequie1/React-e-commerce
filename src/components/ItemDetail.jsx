import { useState } from 'react';
import '../scss/ItemDetail.scss';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const ItemDetail = ({ image, title, price, description, category }) => {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState('L');

  return (
    <div className="details">
      <div className="details__images">
        <img src={image} alt="" />
      </div>
      <div className="details__sidebar">
        <div className="information">
          <h4 className="information__title">{title}</h4>
          <p className="information__price">$ {price}</p>
          <p className="information__description">{description}</p>
        </div>
        <div className="quantity">
          <button className="quantity__btn" disabled={quantity < 1} onClick={() => setQuantity(curr => curr - 1)}>
            -
          </button>
          <p className="quantity__value">{quantity}</p>
          <button className="quantity__btn" onClick={() => setQuantity(curr => curr + 1)}>
            +
          </button>
        </div>
        <div className="sizes">
          {sizes.map(sizebtn => (
            <button className={size === sizebtn ? 'sizes__btn--active' : 'sizes__btn'} key={sizebtn} onClick={() => setSize(sizebtn)}>
              {sizebtn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
