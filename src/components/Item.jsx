import { ImageWithPlaceholder } from './componentsIndex';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { brands } from '../assets/imagesIndex';
import '../scss/Item.scss';

export const Item = memo(({ product }) => {
  return (
    <li className="product-container">
      <Link className="product" to={`/item/${product.id}`}>
        <ImageWithPlaceholder classname={'product__image'} src={product.variations[0].images[0]} alt={product.title} />
        <p className="product__title">{product.title}</p>
        <img className="product__brand" src={brands[product.brand]} alt={product.brand} />
        <p className="product__category">{product.category.toUpperCase()} </p>
        <div className="product__variations">
          {product.variations.map(variation => (
            <span className="color" key={variation.color} style={{ backgroundColor: variation.color }}></span>
          ))}
        </div>
        <p className="product__price">${product.price.toFixed(2)}</p>
      </Link>
    </li>
  );
});
