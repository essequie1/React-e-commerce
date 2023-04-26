export const ItemDetailCounter = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity">
      <p className="quantity__title">QUANTITY:</p>
      <button className="quantity__btn" disabled={quantity < 2} onClick={() => setQuantity(curr => curr - 1)}>
        -
      </button>
      <p className="quantity__value">{quantity}</p>
      <button className="quantity__btn" disabled={quantity > 4} onClick={() => setQuantity(curr => curr + 1)}>
        +
      </button>
    </div>
  );
};
