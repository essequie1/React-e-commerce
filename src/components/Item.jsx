import { Link } from 'react-router-dom';
import bapeLogo from '../assets/brands/bape.png';
import offwhiteLogo from '../assets/brands/off-white.png';
import supremeLogo from '../assets/brands/supreme.png';
import obeyLogo from '../assets/brands/obey.png';
import '../scss/Item.scss';

const brands = {
  bape: bapeLogo,
  'off-white': offwhiteLogo,
  supreme: supremeLogo,
  obey: obeyLogo,
};

export const Item = ({ product }) => {
  const variationsArr = Object.values(product.variations);
  return (
    <li className="product-container">
      <Link className="product" to={`/item/${product.id}`}>
        <img className="product__image" src={variationsArr[0].images[0]} alt={product.title} />
        <p className="product__title">{product.title}</p>
        <img className="product__brand" src={brands[product.brand]} alt={product.brand} />
        <p className="product__category">{product.category.toUpperCase()} </p>
        <div className="product__variations">
          {variationsArr.map((variation, i) => (
            <span className="color" key={variation.color} style={{ backgroundColor: variation.color }}></span>
          ))}
        </div>
        <p className="product__price">$ {product.price.toFixed(2)}</p>
      </Link>
    </li>
  );
};
