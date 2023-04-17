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

export const Item = ({ brand, gender, id, price, title, variations }) => {
  const variationsArr = Object.values(variations);
  return (
    <li className="item">
      <Link className="item__link" to={`/item/${id}`}>
        <div className="item-images">
          <img src={variationsArr[0].images[0]} alt={title} />
        </div>
        <div className="item-details">
          <div className="item-information">
            <p className="item-information__title">{title}</p>
            <img className="item-information__brand" src={brands[brand]} alt={brand} />
            <p className="item-information__target">{gender.toUpperCase()} </p>
          </div>
          <div className="item-variations">
            {variationsArr.map((variation, i) => (
              <span className="color" key={variation.color} style={{ backgroundColor: variation.color }}></span>
            ))}
          </div>
          <p className="item-details__price">$ {price.toFixed(2)}</p>
        </div>
      </Link>
    </li>
  );
};
